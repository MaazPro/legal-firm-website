# West Adelaide Legal Website - Content, Structure and Approved Requirements

> **Purpose of this file**  
> This document is the current source of truth for the West Adelaide Legal website. It consolidates the material supplied by the client in `Privacy-policy-template.docx` and `Web Content.docx`, plus the website decisions approved during requirements/design discussions.
>
> **Critical content rule:** Do not invent facts, credentials, practice areas, addresses, testimonials, statistics, awards, social-media profiles, lawyer photographs, slogans, case results, or other content not contained in this file or explicitly supplied later by the client.

## 1. Authority and precedence

1. Use this document as the primary implementation/content reference.
2. The Word version of this specification contains the same written information plus embedded visual references for the approved logo/homepage design direction.
3. If the generated visual mockups contain wording that is not present in the approved source content below, treat that wording as **design-only** and **do not publish it**.
4. The client has explicitly chosen `akrishnan@westadelaidelegal.com.au` as the primary website email address. Do not use `akrishnan@westadelaide.com.au`, even though that second address appeared in the original privacy-policy source document.
5. Do not add social-media links unless the client supplies them later.
6. Do not add a professional photograph of Ashwina Krishnan at this stage. The design must work without one; a photograph may be added in the future.
7. Do not use placeholder business content. If information has not been supplied, omit it.

---

## 2. Business identity and contact information

- **Business name:** West Adelaide Legal Pty Ltd
- **Website referenced in privacy policy:** www.westadelaidelegal.com.au
- **Primary email:** akrishnan@westadelaidelegal.com.au
- **Phone:** 0410 106 136
- **International phone format:** +61 410 106 136
- **Primary exact address currently available:** Spaces @ The Heroic, 1-3 Metro Parade, Mawson Lakes SA 5095
- **Location context:** Adelaide, South Australia
- **WhatsApp:** Provide a WhatsApp contact option using the supplied phone number. The floating WhatsApp control should open the WhatsApp chat flow for the firm.

### Map rule

The website must include a Google Map/location component. The only complete street address currently supplied is:

**Spaces @ The Heroic, 1-3 Metro Parade, Mawson Lakes SA 5095**

Use this exact address for the map pin. Do not invent street addresses for the other appointment locations until those addresses are supplied.

---

## 3. Approved website architecture

The current website is a **multi-page website** with six pages total:

1. **Home** `/`
2. **About** `/about`
3. **Practice Areas** `/practice-areas`
4. **Fees & Appointments** `/fees-appointments`
5. **Contact** `/contact`
6. **Privacy Policy** `/privacy-policy`

### Main navigation

The main navigation should contain:

- Home
- About
- Practice Areas
- Fees & Appointments
- Contact
- Primary CTA: **Free Initial Appointment**

The **Privacy Policy** should be accessible from the footer and contact-form privacy acknowledgement, but does not need to appear in the primary navigation.

### Future expansion

The architecture should be cleanly extensible for future content such as:

- individual practice-area pages;
- Insights / legal articles;
- appointment booking;
- social-media profiles;
- a professional lawyer photograph.

Do not add those items now unless the client provides the content and explicitly approves them.

---

## 4. Approved brand and visual direction

### Logo

The approved logo direction is **Option A** from the design exploration:

- elegant overlapping **W/A** monogram;
- deep navy as the dominant logo colour;
- restrained warm gold/brass accent;
- refined serif wordmark treatment for **West Adelaide Legal**;
- prestigious, modern, boutique-law-firm character;
- avoid cliché legal imagery in the logo (no gavel, scales, courthouse columns, etc.).

Do not include unapproved taglines that appeared in concept artwork.

### Visual system

- **Overall mood:** prestigious, modern, calm, credible, compassionate and accessible.
- **Primary palette:** deep navy / dark blue.
- **Secondary background:** white and warm ivory/very light neutral.
- **Accent:** restrained gold/brass.
- **Typography:** elegant serif for large headings; clean sans-serif for body/UI text.
- **Spacing:** generous, editorial, uncluttered.
- **Animation:** subtle and purposeful only (gentle reveal/fade, navigation transition, button hover, restrained scroll animation). Avoid flashy 3D effects, aggressive parallax, spinning elements, oversized gradients, or startup-style visual effects.
- **Imagery:** the site does not currently require a lawyer photograph. Do not use a fake/stock person as Ashwina.
- **Legal clichés:** avoid overusing gavels, scales, courthouse columns, or generic stock-law visuals. The approved homepage composition may use architectural/brand-led imagery, but the final site should feel authentic and restrained.

### Responsive rule explicitly approved

For **medium screen sizes and below**, the lower contact-area components must **stack vertically and each take the full available width**. In particular, do not compress the contact/enquiry form and map/location content into narrow side-by-side columns on tablet/mobile. Contact details, form, and map should be comfortably readable and full-width/stacked as needed.

Mobile navigation should use a clean hamburger/menu drawer pattern.

---

## 5. Technology, performance and deployment requirements

The client has chosen:

- **Next.js**
- **Chakra UI**
- **Tailwind CSS**
- Production-ready code suitable for **Netlify deployment**

### Implementation principles

- Build production-quality, maintainable components.
- The site must be fully responsive.
- Prioritise speed and SEO.
- Use semantic HTML and accessible UI patterns.
- Optimise images/assets and avoid unnecessary client-side JavaScript.
- Use Next.js SEO/metadata capabilities appropriately.
- Prepare normal production checks such as linting and a successful production build before deployment.
- Keep Chakra UI and Tailwind responsibilities intentional rather than randomly mixing styling approaches.
- Do not hard-code secrets or API keys.
- Form delivery/backend provider has **not yet been specified**; do not invent a third-party service without approval.
- Google Maps implementation method/API configuration has **not yet been specified**; use the supplied address when implementation is finalised.

---

## 6. Approved source copy - About Us

### About Us

West Adelaide Legal are here to offer legal support that is trusted, compassionate and tailored to your needs.

West Adelaide Legal was founded with the objective of enhancing access to justice for our community’s most vulnerable by providing legal services that are affordable and accessible.

At West Adelaide Legal, we ensure that our clients feel supported, informed and empowered throughout their legal journey.

### Content positioning for the Home/About pages

The website should emphasise the source-supported themes above:

- trusted legal support;
- compassionate legal support;
- support tailored to client needs;
- affordable and accessible legal services;
- enhancing access to justice for vulnerable members of the community;
- helping clients feel supported, informed and empowered.

Do not invent claims such as “award-winning,” “best law firm,” case-win rates, years of firm operation, client counts, or testimonials.

---

## 7. Areas of Practice

Use only the following practice areas currently supplied:

1. **Criminal & Traffic Law**
2. **Family Law & Family Violence** *(including intervention order matters)*
3. **Migration & Refugee Law**
4. **Spent Conviction Order Applications**
5. **Human Rights Law**

No detailed practice-area descriptions have been supplied yet. Do not manufacture long service descriptions. The Practice Areas page may present the titles cleanly and can be expanded later when approved copy is provided.

---

## 8. Pricing / Fees content

### Pricing

We offer fixed fee agreements for when the cost of your matter can be estimated in advance. The cost of each matter is assessed on a case-by-case basis, depending on duration and complexity. You will be advised of the cost upfront prior to entering into any agreement.

West Adelaide Legal are committed to offering accessible and cost-effective legal assistance. A payment plan can also be arranged according to your specific circumstances. We also assist with obtaining Legal Aid funding for those eligible.

### Key points that may be surfaced visually

- fixed fee agreements where the cost can be estimated in advance;
- case-by-case assessment based on duration and complexity;
- cost advised upfront before entering an agreement;
- payment plans may be arranged according to individual circumstances;
- assistance with obtaining Legal Aid funding for eligible clients.

Do not publish specific dollar amounts because none have been supplied.

---

## 9. Our People - Ashwina Krishnan

### Role

**Ashwina Krishnan is the principal solicitor of West Adelaide Legal.**

### Education

Ashwina graduated from the University of Adelaide with a Bachelor of Laws and Bachelor of International Studies in 2018. In 2026, Ashwina also completed a Masters of Law specialising in Human Rights Law and Policy.

### Career and admissions

She was admitted to the Supreme Court of New South Wales in 2019 and commenced her legal career in private practice, primarily working in the areas of immigration, family and criminal defence.

Since then, Ashwina has gained a wealth of diverse and valuable professional experience working as a summary prosecutor for the Office of the Director of Public Prosecution in the Northern Territory and as a legal and policy officer for the Commonwealth Attorney-General’s Department. These experiences have furnished Ashwina with a unique insight into the inner workings of the justice system and the challenges associated with navigating it.

Ashwina is admitted to Supreme Court of South Australia and the High Court of Australia. She is also a current member of the Legal Services Commission of South Australia’s General Panel.

### Client approach

Ashwina recognises that legal proceedings can be extremely stressful and is committed to providing accessible legal support tailored to individual client needs.

### Image rule

Do **not** show a professional portrait/stock substitute at this stage. The page layout must remain visually complete without a portrait. A real photograph may be introduced later.

---

## 10. Appointments

Please contact us for a free, no obligation, initial appointment to discuss your matter. Free first appointments are currently available via telephone.

In-person appointments are offered, between 9:30 am and 5:00 pm, at the following locations:

- Spaces Currie St, Adelaide CBD
- Regus Victoria Park
- The Heroic, Mawson Lakes

West Adelaide is committed to accessibility and are here to accommodate your needs. We are happy to consider home visits or after hour appointments should the above locations or timings be unsuitable.

Please contact us at **0410 106 136** to discuss further.

### Location-address constraint

Only The Heroic has a full street address supplied in the source material. List the other appointment locations by the names above; do not invent their street addresses.

---

## 11. Contact experience

### Contact information

- **Phone:** 0410 106 136
- **Email:** akrishnan@westadelaidelegal.com.au
- **Address:** Spaces @ The Heroic, 1-3 Metro Parade, Mawson Lakes SA 5095

### Contact form

The website should have a structured enquiry/contact form. Current approved form fields from the design discussion:

- Full Name - required
- Email - required
- Phone - required
- Message - required
- Privacy acknowledgement checkbox - required
- Submit CTA: **Send Enquiry**

Privacy acknowledgement should link to the Privacy Policy page.

Do not add sensitive intake questions or request unnecessary personal/legal details unless the client later approves them.

### WhatsApp

- Include a floating WhatsApp contact control.
- Use the supplied number `0410 106 136` / `+61 410 106 136` for the WhatsApp link unless the client later changes it.
- WhatsApp is a secondary quick-contact option and should not replace the contact form.
- Keep the WhatsApp button visually restrained and compatible with the premium design.

### Google Map

- Include an interactive location/map section.
- Pin the exact supplied address: **Spaces @ The Heroic, 1-3 Metro Parade, Mawson Lakes SA 5095**.
- A “Get Directions” action is appropriate.

---

## 12. Home page - approved content structure

The homepage design direction has been approved. Use the following content hierarchy while respecting the no-invented-copy rule.

1. **Header / navigation**
   - approved WA logo direction;
   - Home, About, Practice Areas, Fees & Appointments, Contact;
   - CTA: Free Initial Appointment.

2. **Hero**
   - primary source-supported headline direction: **“Trusted, compassionate legal support tailored to your needs.”**
   - use source-supported About copy for supporting text;
   - show Adelaide, South Australia only if location context is needed;
   - CTAs: Free Initial Appointment and Call 0410 106 136.

3. **About West Adelaide Legal**
   - use the approved About Us copy from Section 6.

4. **Areas of Practice**
   - show the five supplied practice areas only.

5. **Our People / Ashwina Krishnan**
   - introduce Ashwina as Principal Solicitor;
   - use her supplied education, career, admission and client-approach information;
   - no portrait for now.

6. **Fees & Appointments**
   - fixed fee / case-by-case / upfront costs / payment plans / Legal Aid assistance;
   - free no-obligation initial appointment via telephone;
   - in-person appointment locations and accessibility options.

7. **Contact**
   - contact details;
   - enquiry form;
   - map for The Heroic;
   - WhatsApp floating contact option.

8. **Footer**
   - business name/logo;
   - primary site links;
   - phone, email and exact supplied address;
   - Privacy Policy;
   - no unprovided social-media links.

### Important mockup-copy warning

The visual mockups produced during design exploration contain some decorative/generated lines such as taglines and supporting statements that were not supplied in the client documents. Those lines are **not approved production copy**. When implementing the homepage, use only the source-supported content in this specification unless the client explicitly approves additional copy later.

---

## 13. About page - content structure

The About page should include:

1. **About West Adelaide Legal** - the full About Us copy.
2. **Firm purpose / client approach** - access to justice, affordability, accessibility, supported/informed/empowered client experience.
3. **Ashwina Krishnan - Principal Solicitor** - full professional profile supplied in Section 9.
4. No fabricated firm history, staff members, statistics, awards, testimonials or photographs.

---

## 14. Practice Areas page - content structure

Present the five approved practice areas clearly and professionally:

- Criminal & Traffic Law
- Family Law & Family Violence (incl. intervention order matters)
- Migration & Refugee Law
- Spent Conviction Order Applications
- Human Rights Law

No unsupported service descriptions should be added.

---

## 15. Fees & Appointments page - content structure

Use the full approved Pricing and Appointments content from Sections 8 and 10.

Recommended information hierarchy:

1. Pricing / cost approach
2. Fixed fee availability
3. Upfront cost advice
4. Payment plans
5. Legal Aid funding assistance for eligible clients
6. Free no-obligation initial telephone appointment
7. In-person appointment locations and 9:30 am-5:00 pm availability
8. Possible home visits / after-hours appointments
9. Call 0410 106 136 CTA

---

## 16. Contact page - content structure

Include:

- phone;
- primary email;
- exact Mawson Lakes address;
- contact/enquiry form;
- free initial telephone appointment information;
- appointment locations by supplied name;
- map pinned to The Heroic exact address;
- WhatsApp quick-contact option;
- Privacy Policy acknowledgement/link.

---

## 17. Privacy Policy - approved website copy

**Important:** The original source document included two email addresses in its final contact block. The client explicitly instructed that the website should use **akrishnan@westadelaidelegal.com.au**. Therefore the obsolete/secondary `akrishnan@westadelaide.com.au` address must not appear on the website.

### Privacy Policy

West Adelaide Legal Pty Ltd is committed to providing quality services to you and this policy outlines our ongoing obligations to you in respect of how we manage your Personal Information.

We have adopted the Australian Privacy Principles (APPs) contained in the Privacy Act 1988 (Cth) (the Privacy Act). The NPPs govern the way in which we collect, use, disclose, store, secure and dispose of your Personal Information.

A copy of the Australian Privacy Principles may be obtained from the website of The Office of the Australian Information Commissioner at https://www.oaic.gov.au/.

#### What is Personal Information and why do we collect it?

Personal Information is information or an opinion that identifies an individual. Examples of Personal Information we collect includes names, addresses, email addresses, phone and facsimile numbers.

This Personal Information is obtained in many ways including interviews, correspondence, by telephone, by email, via our website www.westadelaidelegal.com.au, from other publicly available sources, from cookies and from third parties. We don’t guarantee website links or policy of authorised third parties.

We collect your Personal Information for the primary purpose of providing our services to you, providing information to our clients and marketing. We may also use your Personal Information for secondary purposes closely related to the primary purpose, in circumstances where you would reasonably expect such use or disclosure.

When we collect Personal Information we will, where appropriate and where possible, explain to you why we are collecting the information and how we plan to use it.

#### Sensitive Information

Sensitive information is defined in the Privacy Act to include information or opinion about such things as an individual's racial or ethnic origin, political opinions, membership of a political association, religious or philosophical beliefs, membership of a trade union or other professional body, criminal record or health information.

Sensitive information will be used by us only:

- For the primary purpose for which it was obtained
- For a secondary purpose that is directly related to the primary purpose
- With your consent; or where required or authorised by law.

#### Third Parties

Where reasonable and practicable to do so, we will collect your Personal Information only from you. However, in some circumstances we may be provided with information by third parties. In such a case we will take reasonable steps to ensure that you are made aware of the information provided to us by the third party.

#### Disclosure of Personal Information

Your Personal Information may be disclosed in a number of circumstances including the following:

- Third parties where you consent to the use or disclosure; and
- Where required or authorised by law.

#### Security of Personal Information

Your Personal Information is stored in a manner that reasonably protects it from misuse and loss and from unauthorized access, modification or disclosure.

When your Personal Information is no longer needed for the purpose for which it was obtained, we will take reasonable steps to destroy or permanently de-identify your Personal Information. However, most of the Personal Information is or will be stored in client files which will be kept by us for a minimum of 7 years.

#### Access to your Personal Information

You may access the Personal Information we hold about you and to update and/or correct it, subject to certain exceptions. If you wish to access your Personal Information, please contact us in writing.

West Adelaide Legal Pty Ltd will not charge any fee for your access request, but may charge an administrative fee for providing a physical copy of your Personal Information.

In order to protect your Personal Information we may require identification from you before releasing the requested information.

#### Maintaining the Quality of your Personal Information

It is an important to us that your Personal Information is up to date. We will take reasonable steps to make sure that your Personal Information is accurate, complete and up to date. If you find that the information we have is not up to date or is inaccurate, please advise us as soon as practicable so we can update our records and ensure we can continue to provide quality services to you.

#### Policy Updates

This Policy may change from time to time and is available on our website.

#### Privacy Policy Complaints and Enquiries

If you have any queries or complaints about our Privacy Policy please contact us at:

- akrishnan@westadelaidelegal.com.au
- Spaces @ The Heroic, 1-3 Metro Parade, Mawson Lakes SA 5095
- +61 410 106 136

### Legal-text preservation rule

The privacy-policy wording above is reproduced from the supplied source document, except for applying the client's explicit instruction to use only `akrishnan@westadelaidelegal.com.au` as the website email. Do not silently rewrite or “correct” legal-policy wording during implementation. Any legal-language edits should be client/lawyer-approved before publication.

---

## 18. Content explicitly not approved / not available

Do not create or publish any of the following unless supplied later:

- social-media URLs or icons that link to unprovided profiles;
- professional lawyer photograph;
- testimonials;
- case results;
- client counts;
- awards;
- success rates;
- years-in-business claims for the firm;
- additional lawyers/staff;
- detailed practice-area descriptions beyond supplied wording;
- exact street addresses for Spaces Currie St or Regus Victoria Park;
- legal articles / Insights content;
- appointment-booking functionality (future possibility only);
- specific pricing amounts;
- unapproved slogans/taglines from mockups.

---

## 19. Current design approval status

Approved so far:

- Logo direction: Option A (WA monogram, navy/gold, elegant serif wordmark).
- Homepage desktop visual direction.
- Homepage mobile visual direction.
- Mobile/tablet correction: bottom/contact components stack and take full width at medium sizes and below.

Not yet finalised visually:

- About page design.
- Practice Areas page design.
- Fees & Appointments page design.
- Contact page design.
- Privacy Policy page design.

The final Codex build command should only be issued after the remaining page designs/requirements are approved, unless the client explicitly decides to proceed sooner.
