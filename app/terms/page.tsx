import type { Metadata } from "next"
import Link from "next/link"
import { LegalPage, type LegalSection } from "@/components/legal-page"
import { CONTACT } from "@/lib/navigation"

export const metadata: Metadata = {
  title: "Terms of Use | Durabuild Infra Build",
  description: "The terms and conditions that govern your use of durainfra.com, the website of Durabuild Infra Build Pvt. Ltd.",
}

const sections: LegalSection[] = [
  {
    id: "acceptance",
    title: "Acceptance of Terms",
    body: (
      <p>
        These Terms of Use govern your access to and use of <strong>durainfra.com</strong> (the &quot;Website&quot;),
        operated by <strong>Durabuild Infra Build Pvt. Ltd.</strong> (&quot;Durabuild&quot;, &quot;we&quot;,
        &quot;us&quot; or &quot;our&quot;). By using the Website, you agree to these terms. If you do not agree,
        please do not use the Website.
      </p>
    ),
  },
  {
    id: "about-website",
    title: "Purpose of the Website",
    body: (
      <p>
        The Website provides general information about Durabuild, our services, sectors, projects and CSR initiatives.
        Nothing on the Website is a binding offer, quotation or contract. Any engagement for services is subject to a
        separate written agreement signed by both parties.
      </p>
    ),
  },
  {
    id: "use",
    title: "Using the Website",
    body: (
      <>
        <p>You agree to use the Website only for lawful purposes. You must not:</p>
        <ul>
          <li>Submit false, misleading or someone else&apos;s information through our forms</li>
          <li>Attempt to gain unauthorised access to the Website, its servers or connected systems</li>
          <li>Introduce viruses, malicious code or anything that disrupts the Website</li>
          <li>Scrape, copy or republish Website content for commercial use without our written permission</li>
          <li>Use the Website to send spam or unsolicited promotional material</li>
        </ul>
      </>
    ),
  },
  {
    id: "intellectual-property",
    title: "Intellectual Property",
    body: (
      <p>
        All content on the Website — including text, graphics, logos, the Durabuild name and brand marks, images,
        videos and page design — is owned by or licensed to Durabuild and protected by applicable intellectual property
        laws. You may view and print pages for personal, non-commercial reference only.
      </p>
    ),
  },
  {
    id: "project-information",
    title: "Project Information & Imagery",
    body: (
      <p>
        Project descriptions, specifications, timelines and images on the Website are provided for illustration and
        general information. Some images are representative and may not depict actual completed projects. Designs,
        materials and specifications may change, and final details are confirmed only in a signed agreement.
      </p>
    ),
  },
  {
    id: "enquiries",
    title: "Enquiries & Quotations",
    body: (
      <p>
        Submitting an enquiry through the Website does not create a contract or obligation for either party. Any
        estimate or quotation we share is based on the information available at the time and may be revised after a
        site visit, detailed assessment or change in project scope. Information you share with us is handled in line
        with our <Link href="/privacy-policy">Privacy Policy</Link>.
      </p>
    ),
  },
  {
    id: "third-party",
    title: "Third-Party Links & Services",
    body: (
      <p>
        The Website may contain links to, or embedded content from, third-party websites and services such as maps and
        social media. We do not control and are not responsible for their content, availability or practices. Use of
        third-party services is at your own risk and subject to their terms.
      </p>
    ),
  },
  {
    id: "disclaimer",
    title: "Disclaimer",
    body: (
      <p>
        We work to keep the Website accurate and up to date, but it is provided on an &quot;as is&quot; and &quot;as
        available&quot; basis. We make no warranties, express or implied, about the completeness, accuracy, reliability
        or availability of the Website or its content, and we do not guarantee it will be free of errors or
        interruptions.
      </p>
    ),
  },
  {
    id: "liability",
    title: "Limitation of Liability",
    body: (
      <p>
        To the fullest extent permitted by law, Durabuild and its directors, employees and partners will not be liable
        for any indirect, incidental or consequential loss or damage arising from your use of, or inability to use, the
        Website or reliance on any information on it.
      </p>
    ),
  },
  {
    id: "indemnity",
    title: "Indemnity",
    body: (
      <p>
        You agree to indemnify and hold Durabuild harmless from any claims, losses or expenses arising from your misuse
        of the Website or your breach of these Terms of Use.
      </p>
    ),
  },
  {
    id: "governing-law",
    title: "Governing Law & Jurisdiction",
    body: (
      <p>
        These terms are governed by the laws of India. Any dispute arising in connection with the Website will be
        subject to the exclusive jurisdiction of the courts at Dehradun, Uttarakhand.
      </p>
    ),
  },
  {
    id: "changes",
    title: "Changes to These Terms",
    body: (
      <p>
        We may revise these Terms of Use at any time by updating this page. The &quot;Last updated&quot; date shows
        when they were last changed. Continued use of the Website after changes means you accept the revised terms.
      </p>
    ),
  },
  {
    id: "contact",
    title: "Contact Us",
    body: (
      <p>
        For any questions about these terms, email <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>, call{" "}
        {CONTACT.phones.join(" / ")}, or write to Durabuild Infra Build Pvt. Ltd., {CONTACT.address.join(", ")}.
      </p>
    ),
  },
]

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Terms of Use"
      intro="Please read these terms carefully. They set out the rules for using our website and the information on it."
      lastUpdated="15 September 2026"
      sections={sections}
    />
  )
}
