export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  content: string
  image: string
  date: string
  dateISO: string
  readTime: string
  author: string
  tags: string[]
  category: string
}

export const blogPosts: BlogPost[] = [
  {
    slug: "complete-guide-pnd50-thailand-corporate-tax",
    title: "Complete Guide to PND50: Thailand's Corporate Income Tax Return",
    excerpt:
      "Everything foreign business owners need to know about filing PND50 (ภ.ง.ด.50) in Thailand, including deadlines, requirements, and common mistakes to avoid.",
    content: `
## What is PND50?

PND50 (ภ.ง.ด.50 or P.N.D.50) is Thailand's annual corporate income tax return form. Every company registered in Thailand must file this form within 150 days after the end of their accounting period.

## Who Must File PND50?

All juristic companies registered in Thailand are required to file PND50, including:

- Thai limited companies
- Foreign-owned subsidiaries
- Branch offices of foreign companies
- Partnerships registered as juristic persons

## Key Deadlines

For companies with a fiscal year ending December 31st, the PND50 filing deadline is May 31st of the following year. Late filing results in penalties and surcharges.

## Required Documents

To file PND50, you need:

1. Audited financial statements
2. Balance sheet
3. Profit and loss statement
4. Notes to financial statements
5. Shareholder list
6. Director information

## Corporate Tax Rates in Thailand

The standard corporate income tax rate in Thailand is 20%. However, SMEs may qualify for reduced rates:

- Net profit up to 300,000 THB: Exempt
- Net profit 300,001 - 3,000,000 THB: 15%
- Net profit above 3,000,000 THB: 20%

## Common Mistakes to Avoid

1. Missing the filing deadline
2. Incorrect exchange rate calculations
3. Not claiming allowable deductions
4. Improper documentation of expenses
5. Failing to reconcile accounting and tax figures

## How PND50 Can Help

Our team specializes in helping foreign companies navigate Thai tax compliance. We handle everything from monthly bookkeeping to annual PND50 filing, ensuring your business stays compliant.
    `,
    image: "/corporate-tax-planning-with-charts-and-growth-grap.jpg",
    date: "January 15, 2026",
    dateISO: "2026-01-15",
    readTime: "8 min read",
    author: "PND50 Team",
    tags: ["PND50", "Corporate Tax", "Thailand Tax", "Compliance"],
    category: "Tax",
  },
  {
    slug: "vat-registration-thailand-foreign-companies",
    title: "VAT Registration in Thailand: A Guide for Foreign Companies",
    excerpt:
      "Learn when your foreign-owned company needs to register for VAT in Thailand, the registration process, and monthly filing requirements.",
    content: `
## When is VAT Registration Required?

In Thailand, VAT registration becomes mandatory when your annual revenue exceeds 1.8 million THB. However, there are exceptions for businesses whose services are performed and consumed entirely outside Thailand.

## VAT Rate in Thailand

The current VAT rate in Thailand is 7%. This applies to most goods and services.

## VAT Registration Process

1. Prepare required documents
2. Submit application to Revenue Department
3. Receive VAT registration certificate
4. Begin monthly PP30 filing

## Monthly VAT Filing (PP30)

Once registered, you must file Form PP.30 by the 15th of each following month, even if you have no transactions. Late filing results in penalties.

## Input VAT vs Output VAT

- Output VAT: VAT collected from customers
- Input VAT: VAT paid on business purchases
- You remit the difference to the Revenue Department

## Zero-Rated vs Exempt Services

Some services are zero-rated (0% VAT) or exempt. Understanding the difference is crucial for compliance.
    `,
    image: "/vat-tax-documents-and-calculator-illustration.jpg",
    date: "January 10, 2026",
    dateISO: "2026-01-10",
    readTime: "6 min read",
    author: "PND50 Team",
    tags: ["VAT", "Tax Registration", "Thailand Business"],
    category: "Tax",
  },
  {
    slug: "setting-up-company-thailand-foreigners",
    title: "How to Set Up a Company in Thailand as a Foreigner",
    excerpt:
      "Step-by-step guide for foreign entrepreneurs looking to establish a business in Thailand, covering company types, requirements, and common structures.",
    content: `
## Company Types Available

Foreign investors can establish several types of entities in Thailand:

1. **Thai Limited Company** - Most common structure
2. **Branch Office** - Extension of foreign parent
3. **Representative Office** - Limited to non-revenue activities
4. **BOI Promoted Company** - With Board of Investment benefits

## Foreign Business Act Considerations

The Foreign Business Act restricts foreign ownership in certain sectors. Many businesses require majority Thai ownership unless they obtain a Foreign Business License (FBL) or BOI promotion.

## Minimum Capital Requirements

- Standard minimum: 2 million THB
- For work permit applications: 2 million THB per foreign employee
- BOI companies may have different requirements

## Registration Process

1. Reserve company name with DBD
2. Draft Memorandum of Association
3. Hold statutory meeting
4. Register company with DBD
5. Register for tax with Revenue Department
6. Register for social security

## Timeline

Typical company registration takes 2-4 weeks depending on complexity and document preparation.

## Ongoing Compliance

Once established, companies must maintain:

- Monthly tax filings
- Annual financial statements
- Annual PND50 filing
- Social security contributions
    `,
    image: "/startup-team-launching-business-with-laptop-and-ro.jpg",
    date: "January 5, 2026",
    dateISO: "2026-01-05",
    readTime: "10 min read",
    author: "PND50 Team",
    tags: ["Company Setup", "Foreign Investment", "Thailand Business"],
    category: "Business Setup",
  },
  {
    slug: "withholding-tax-thailand-explained",
    title: "Withholding Tax in Thailand: What Foreign Businesses Need to Know",
    excerpt:
      "Understanding Thailand's withholding tax system, applicable rates, and filing requirements for international business transactions.",
    content: `
## What is Withholding Tax?

Withholding tax (WHT) in Thailand is a tax deducted at source from certain types of payments. The payer withholds the tax and remits it to the Revenue Department.

## Common Withholding Tax Rates

- Services: 3%
- Rent: 5%
- Professional fees: 3%
- Dividends: 10%
- Interest: 15%
- Royalties: 15%

## When to Withhold

Withholding tax applies when paying:

- Other companies for services
- Individuals for services
- Rent payments
- Professional fees
- International payments

## Filing Requirements

Withholding tax certificates must be:

1. Issued to the payee
2. Filed monthly with the Revenue Department
3. Submitted via PND3, PND53, or PND54 forms

## Double Tax Treaties

Thailand has double tax agreements with over 60 countries that may reduce withholding tax rates on cross-border payments.
    `,
    image: "/withholding-tax-forms-and-percentage-illustration.jpg",
    date: "December 28, 2025",
    dateISO: "2025-12-28",
    readTime: "7 min read",
    author: "PND50 Team",
    tags: ["Withholding Tax", "Thailand Tax", "International Business"],
    category: "Tax",
  },
  {
    slug: "thailand-accounting-standards-foreign-companies",
    title: "Thai Accounting Standards: What Foreign Companies Must Know",
    excerpt:
      "An overview of Thai accounting standards, requirements for foreign-owned companies, and key differences from international standards.",
    content: `
## Thai Accounting Standards Overview

Companies in Thailand must prepare financial statements in accordance with Thai Financial Reporting Standards (TFRS), which are largely based on International Financial Reporting Standards (IFRS).

## Key Requirements

1. **Currency**: Financial statements must be in Thai Baht
2. **Language**: Reports for authorities must be in Thai
3. **Accounting Period**: Usually 12 months
4. **Audit Requirement**: All companies require annual audits

## Foreign Exchange Accounting

When transactions occur in foreign currencies:

- Record at exchange rate on transaction date
- Revalue at year-end using Revenue Department rates
- Recognize exchange gains/losses in income statement

## Statutory Records

Companies must maintain:

- General ledger
- Accounts receivable/payable ledgers
- Inventory records
- Fixed asset register
- Tax documentation

## Audit Requirements

Annual financial statements must be audited by a certified public accountant (CPA) licensed in Thailand.
    `,
    image: "/professional-accountant-working-with-client-in-mod.jpg",
    date: "December 20, 2025",
    dateISO: "2025-12-20",
    readTime: "6 min read",
    author: "PND50 Team",
    tags: ["Accounting", "Thai Standards", "Financial Reporting"],
    category: "Accounting",
  },
  {
    slug: "boi-promotion-thailand-benefits-requirements",
    title: "BOI Promotion in Thailand: Benefits and Requirements for Foreign Investors",
    excerpt:
      "Learn about Thailand's Board of Investment promotion schemes, tax incentives, and how foreign companies can qualify for BOI benefits.",
    content: `
## What is BOI?

The Board of Investment (BOI) is a Thai government agency that promotes foreign investment by offering tax incentives and other benefits to qualifying businesses.

## Key Benefits

1. **Corporate Tax Exemption**: Up to 8 years
2. **Import Duty Exemption**: On machinery and raw materials
3. **Foreign Ownership**: 100% foreign ownership allowed
4. **Work Permits**: Easier visa and work permit process
5. **Land Ownership**: Rights to own land for operations

## Eligible Activities

BOI promotes various sectors including:

- Technology and innovation
- Manufacturing
- Digital services
- Biotechnology
- Creative industries

## Application Process

1. Prepare project proposal
2. Submit application to BOI
3. Project review and approval
4. Receive promotion certificate
5. Begin operations

## Compliance Requirements

BOI-promoted companies must:

- Report annually to BOI
- Meet investment commitments
- Maintain required Thai employment ratios
- Comply with promotion conditions
    `,
    image: "/professional-business-team-analyzing-growth-charts.jpg",
    date: "December 15, 2025",
    dateISO: "2025-12-15",
    readTime: "8 min read",
    author: "PND50 Team",
    tags: ["BOI", "Foreign Investment", "Tax Incentives", "Thailand"],
    category: "Business Setup",
  },
]

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug)
}

export function getRelatedPosts(currentSlug: string, limit: number = 3): BlogPost[] {
  const currentPost = getBlogPost(currentSlug)
  if (!currentPost) return blogPosts.slice(0, limit)

  return blogPosts
    .filter((post) => post.slug !== currentSlug)
    .filter((post) => post.tags.some((tag) => currentPost.tags.includes(tag)) || post.category === currentPost.category)
    .slice(0, limit)
}
