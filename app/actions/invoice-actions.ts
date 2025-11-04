"use server"

import { createServerClient } from "@/lib/supabase/server"
import { revalidatePath } from "next/cache"

export async function generateInvoiceAction(formData: FormData) {
  const supabase = await createServerClient()

  // Get the authenticated user
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser()

  if (authError || !user) {
    return {
      success: false,
      error: "Unauthorized",
    }
  }

  // Extract form data
  const customerName = formData.get("customerName") as string
  const customerEmail = formData.get("customerEmail") as string
  const customerAddress = formData.get("customerAddress") as string
  const dueDate = formData.get("dueDate") as string
  const notes = formData.get("notes") as string

  // Parse items from form data
  const items = []
  let itemIndex = 0
  while (formData.has(`items[${itemIndex}].description`)) {
    items.push({
      description: formData.get(`items[${itemIndex}].description`) as string,
      quantity: Number.parseInt(formData.get(`items[${itemIndex}].quantity`) as string),
      price: Number.parseFloat(formData.get(`items[${itemIndex}].price`) as string),
    })
    itemIndex++
  }

  // Calculate totals
  const subtotal = items.reduce((sum, item) => sum + item.quantity * item.price, 0)
  const tax = subtotal * 0.07 // 7% tax
  const total = subtotal + tax

  // Insert invoice into database
  const { data: invoice, error: insertError } = await supabase
    .from("invoices")
    .insert({
      user_id: user.id,
      customer_name: customerName,
      customer_email: customerEmail,
      customer_address: customerAddress,
      due_date: dueDate,
      notes: notes || null,
      items: items,
      subtotal: subtotal,
      tax: tax,
      total: total,
      status: "draft",
    })
    .select()
    .single()

  if (insertError) {
    console.error("Error creating invoice:", insertError)
    return {
      success: false,
      error: "Failed to create invoice",
    }
  }

  // Revalidate the invoices page
  revalidatePath("/invoices")

  return {
    success: true,
    invoiceId: invoice.id,
  }
}
