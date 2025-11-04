"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { FormControl, FormLabel } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { PlusCircle, Trash2 } from "lucide-react"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { cn } from "@/lib/utils"
import { format, addDays } from "date-fns"
import { useEffect, useState } from "react"
import { generateInvoiceAction } from "@/app/actions/invoice-actions"
import { useRouter } from "next/navigation"

const invoiceFormSchema = z.object({
  customerName: z.string().min(1, { message: "Customer name is required." }),
  customerEmail: z.string().email({ message: "Please enter a valid email." }),
  invoiceDate: z.date({ required_error: "Invoice date is required." }),
  dueDate: z.date({ required_error: "Due date is required." }),
  items: z
    .array(
      z.object({
        description: z.string().min(1, { message: "Description is required." }),
        quantity: z.coerce.number().min(1, { message: "Quantity must be at least 1." }),
        price: z.coerce.number().min(0.01, { message: "Price must be positive." }),
      }),
    )
    .min(1, { message: "Please add at least one item." }),
})

type InvoiceFormValues = z.infer<typeof invoiceFormSchema>
type InvoiceItem = {
  description: string
  quantity: number
  price: number
}

interface GenerateInvoiceFormProps {
  onSuccess?: (invoiceId: string) => void
}

export default function GenerateInvoiceForm({ onSuccess }: GenerateInvoiceFormProps) {
  const router = useRouter()
  const { register, handleSubmit } = useForm<InvoiceFormValues>({
    resolver: zodResolver(invoiceFormSchema),
    defaultValues: {
      customerName: "",
      customerEmail: "",
      invoiceDate: new Date(),
      dueDate: addDays(new Date(), 7),
      items: [{ description: "", quantity: 1, price: 0 }],
    },
  })

  const [items, setItems] = useState<InvoiceItem[]>([{ description: "", quantity: 1, price: 0 }])

  useEffect(() => {
    setItems([{ description: "", quantity: 1, price: 0 }])
  }, [])

  const addItem = () => {
    setItems([...items, { description: "", quantity: 1, price: 0 }])
  }

  const removeItem = (index: number) => {
    if (items.length > 1) {
      setItems(items.filter((_, i) => i !== index))
    }
  }

  const updateItem = (index: number, key: keyof InvoiceItem, value: InvoiceItem[keyof InvoiceItem]) => {
    setItems(items.map((item, i) => (i === index ? { ...item, [key]: value } : item)))
  }

  async function handleFormSubmit(formData: FormData) {
    const result = await generateInvoiceAction(formData)

    if (result.success && result.invoiceId) {
      if (onSuccess) {
        onSuccess(result.invoiceId)
      } else {
        router.push(`/invoices/${result.invoiceId}`)
      }
    } else {
      console.error("Failed to generate invoice:", result.error)
      // You could add toast notification here
    }
  }

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle>Generate New Invoice</CardTitle>
        <CardDescription>Fill in the details below to create a new invoice</CardDescription>
      </CardHeader>
      <CardContent>
        <form action={handleFormSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <FormLabel htmlFor="customerName">Customer Name *</FormLabel>
              <FormControl>
                <Input id="customerName" name="customerName" placeholder="John Doe" required />
              </FormControl>
            </div>
            <div className="space-y-2">
              <FormLabel htmlFor="customerEmail">Customer Email *</FormLabel>
              <FormControl>
                <Input id="customerEmail" name="customerEmail" type="email" placeholder="john@example.com" required />
              </FormControl>
            </div>
          </div>

          <div className="space-y-2">
            <FormLabel htmlFor="customerAddress">Customer Address</FormLabel>
            <FormControl>
              <Textarea
                id="customerAddress"
                name="customerAddress"
                placeholder="123 Main St, City, State, ZIP"
                rows={3}
              />
            </FormControl>
          </div>

          <div className="space-y-2">
            <FormLabel htmlFor="dueDate">Due Date *</FormLabel>
            <FormControl>
              <Popover>
                <PopoverTrigger asChild>
                  <Input
                    id="dueDate"
                    name="dueDate"
                    type="text"
                    placeholder={format(addDays(new Date(), 7), "yyyy-MM-dd")}
                    readOnly
                    required
                    className={cn("pl-10", "focus:ring-2 focus:ring-ring focus:ring-offset-2")}
                  />
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar mode="single" selected={new Date()} onSelect={(date) => console.log(date)} initialFocus />
                </PopoverContent>
              </Popover>
            </FormControl>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <FormLabel>Invoice Items *</FormLabel>
              <Button type="button" variant="outline" size="sm" onClick={addItem}>
                <PlusCircle className="h-4 w-4 mr-2" />
                Add Item
              </Button>
            </div>

            {items.map((item, index) => (
              <div key={index} className="flex gap-2 items-start">
                <input type="hidden" name={`items[${index}].description`} value={item.description} />
                <input type="hidden" name={`items[${index}].quantity`} value={item.quantity} />
                <input type="hidden" name={`items[${index}].price`} value={item.price} />
                <div className="flex-1">
                  <Input
                    placeholder="Item description"
                    value={item.description}
                    onChange={(e) => updateItem(index, "description", e.target.value)}
                    required
                  />
                </div>
                <div className="w-24">
                  <Input
                    type="number"
                    placeholder="Qty"
                    min="1"
                    value={item.quantity}
                    onChange={(e) => updateItem(index, "quantity", Number.parseInt(e.target.value))}
                    required
                  />
                </div>
                <div className="w-32">
                  <Input
                    type="number"
                    placeholder="Price"
                    min="0"
                    step="0.01"
                    value={item.price}
                    onChange={(e) => updateItem(index, "price", Number.parseFloat(e.target.value))}
                    required
                  />
                </div>
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  onClick={() => removeItem(index)}
                  disabled={items.length === 1}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>

          <div className="space-y-2">
            <FormLabel htmlFor="notes">Notes</FormLabel>
            <FormControl>
              <Textarea id="notes" name="notes" placeholder="Additional notes or payment instructions" rows={4} />
            </FormControl>
          </div>

          <Button type="submit" className="w-full">
            Generate Invoice
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
