import type { Metadata } from "next"
import Link from "next/link"
import { LegalPage, type LegalSection } from "@/components/legal-page"
import { CONTACT } from "@/lib/navigation"

export const metadata: Metadata = {
  title: "Privacy Policy | Durabuild Infra Build",
  description:
    "How Durabuild Infra Build Pvt. Ltd. collects, uses, and protects personal information shared through durainfra.com.",
}

const sections: LegalSection[] = [
  {
    id: "introduction",
    title: "Introduction",
    body: (
      <>
        <p>
          This Privacy Policy explains how <strong>Durabuild Infra Build Pvt. Ltd.</strong> (&quot;Durabuild&quot;,
          &quot;we&quot;, &quot;us&quot; or &quot;our&quot;) collects, uses, shares and protects personal information
          when you visit <strong>durainfra.com</strong> (the &quot;Website&quot;) or contact us.
        </p>
        <p>
          By using the Website or sharing your information with us, you agree to the practices described here. This
          policy is intended to be read together with our <Link href="/terms">Terms of Use</Link>.
        </p>
      </>
    ),
  },
  {
    id: "information-we-collect",
    title: "Information We Collect",
    body: (
      <>
        <p>
          <strong>Information you give us.</strong> When you fill out our contact form or reach out by email, phone or
          WhatsApp, we may collect:
        </p>
        <ul>
          <li>Your name and the organisation you represent</li>
          <li>Email address and phone number</li>
          <li>The type of enquiry and any message or project details you share</li>
          <li>Details shared for job or supplier enquiries, such as experience or company information</li>
        </ul>
        <p>
          <strong>Information collected automatically.</strong> We use privacy-friendly analytics to understand how
          the Website is used. This may include pages visited, referring website, approximate location (country), and
          device and browser type. This data is aggregated and is not used to identify you personally.
        </p>
      </>
    ),
  },
  {
    id: "how-we-use",
    title: "How We Use Your Information",
    body: (
      <>
        <p>We use the information we collect to:</p>
        <ul>
          <li>Respond to enquiries, prepare quotations and schedule consultations or site visits</li>
          <li>Provide and manage our construction, infrastructure and related services</li>
          <li>Process job applications and supplier or partnership enquiries</li>
          <li>Improve the content, performance and usability of the Website</li>
          <li>Comply with legal obligations and protect our rights</li>
        </ul>
        <p>
          We do <strong>not</strong> sell or rent your personal information to anyone.
        </p>
      </>
    ),
  },
  {
    id: "sharing",
    title: "How We Share Information",
    body: (
      <>
        <p>We share personal information only where needed, with:</p>
        <ul>
          <li>
            <strong>Service providers</strong> who help us run the Website — for example, our form delivery provider
            (Web3Forms), hosting and analytics provider (Vercel), and map provider (Google Maps).
          </li>
          <li>
            <strong>Project partners</strong> such as consultants or contractors, when necessary to deliver the
            services you request.
          </li>
          <li>
            <strong>Authorities</strong> when required by law, court order or a government request.
          </li>
          <li>
            <strong>A successor entity</strong> in the event of a merger, acquisition or restructuring.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "cookies",
    title: "Cookies & Third-Party Services",
    body: (
      <>
        <p>
          The Website itself does not use advertising or tracking cookies. However, some embedded third-party
          services — such as the Google Map on our Contact page and videos hosted externally — may set their own
          cookies under their respective privacy policies.
        </p>
        <p>You can block or delete cookies through your browser settings at any time.</p>
      </>
    ),
  },
  {
    id: "retention",
    title: "Data Retention",
    body: (
      <p>
        We keep personal information only for as long as it is needed for the purpose it was collected — for example,
        to respond to your enquiry or fulfil a contract — or as long as required under applicable laws such as tax and
        accounting regulations. After that, it is deleted or anonymised.
      </p>
    ),
  },
  {
    id: "security",
    title: "Data Security",
    body: (
      <p>
        We use reasonable technical and organisational safeguards, including encrypted (HTTPS) connections, to protect
        your information against unauthorised access, loss or misuse. No method of transmission over the internet is
        completely secure, so we cannot guarantee absolute security.
      </p>
    ),
  },
  {
    id: "your-rights",
    title: "Your Rights",
    body: (
      <>
        <p>
          Subject to applicable law, including the Digital Personal Data Protection Act, 2023, you have the right to:
        </p>
        <ul>
          <li>Access the personal information we hold about you</li>
          <li>Ask us to correct, update or complete your information</li>
          <li>Ask us to erase your information when it is no longer needed</li>
          <li>Withdraw consent you have previously given</li>
          <li>Raise a grievance about how your information is handled</li>
        </ul>
        <p>
          To exercise any of these rights, email us at <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>. We
          may need to verify your identity before acting on a request.
        </p>
      </>
    ),
  },
  {
    id: "children",
    title: "Children's Privacy",
    body: (
      <p>
        The Website is intended for adults. We do not knowingly collect personal information from children under 18.
        If you believe a child has shared information with us, please contact us and we will delete it.
      </p>
    ),
  },
  {
    id: "external-links",
    title: "Links to Other Websites",
    body: (
      <p>
        The Website may link to external sites, such as our social media pages. We are not responsible for the privacy
        practices of those websites and encourage you to read their policies.
      </p>
    ),
  },
  {
    id: "changes",
    title: "Changes to This Policy",
    body: (
      <p>
        We may update this Privacy Policy from time to time. The &quot;Last updated&quot; date at the top of this page
        shows when it was last revised. Continued use of the Website after changes means you accept the updated policy.
      </p>
    ),
  },
  {
    id: "contact",
    title: "Contact & Grievance Redressal",
    body: (
      <p>
        For questions, requests or complaints about this policy or your personal information, contact us at{" "}
        <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>, call {CONTACT.phones.join(" / ")}, or write to
        Durabuild Infra Build Pvt. Ltd., {CONTACT.address.join(", ")}.
      </p>
    ),
  },
]

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Privacy Policy"
      intro="Your trust matters to us. This policy explains what information we collect, why we collect it, and how we keep it safe."
      lastUpdated="15 September 2026"
      sections={sections}
    />
  )
}
