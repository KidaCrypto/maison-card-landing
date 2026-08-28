const legalHeader = () => `
  <header class="site-header legal-header">
    <a class="brand" href="/" aria-label="PlayKami home"><img src="/assets/playkami-logo.svg" alt="PlayKami" /></a>
    <a class="legal-header__back" href="/">Back to home <span aria-hidden="true">→</span></a>
  </header>`

const legalFooter = () => `
  <footer class="site-footer legal-footer">
    <div class="footer-main">
      <div class="footer-brand">
        <a class="brand brand--footer" href="/"><img src="/assets/playkami-logo.svg" alt="PlayKami" /></a>
        <p>Open packs. Find your grail.</p>
      </div>
      <nav class="footer-sitemap" aria-label="Legal pages">
        <h2>Legal</h2>
        <div>
          <a href="/privacy-policy">Privacy Policy</a>
          <a href="/terms-of-service">Terms of Service</a>
        </div>
      </nav>
      <address class="footer-address">
        <strong>Company address</strong>
        <span>Kami Tech LLC<br />8 The Green, Suite R<br />Dover, DE 19901<br />United States</span>
      </address>
    </div>
    <div class="footer-bottom">
      <p>© ${new Date().getFullYear()} PlayKami. All rights reserved.</p>
      <a href="#top">Back to top ↑</a>
    </div>
  </footer>`

const privacyPolicy = `
  <p class="legal-kicker">Legal · Privacy</p>
  <h1>Privacy Policy</h1>
  <p class="legal-updated">Last updated: August 25, 2026</p>
  <div class="legal-intro">
    <p>This Privacy Policy explains how <strong>Kami Tech LLC</strong> ("Kami Tech," "PlayKami," "we," "us," or "our") collects, uses, stores, and shares information when you use the PlayKami website, mobile application, and related services (collectively, the "Service").</p>
    <p>By using the Service, you acknowledge the practices described in this Privacy Policy. If you do not agree, please do not use the Service.</p>
  </div>

  <section>
    <h2><span>01</span> Information we collect</h2>
    <h3>Information you provide</h3>
    <p>We may collect information you provide when you create or update an account, use the Service, or contact us, including:</p>
    <ul>
      <li>Account information, such as your name, username, email address, password, date of birth, and profile details.</li>
      <li>Collection and activity information, such as packs opened, cards revealed, saved preferences, and account history.</li>
      <li>Purchase and transaction records. Payment card details are generally handled by Apple or another payment processor and are not stored by us.</li>
      <li>Messages, support requests, feedback, promotion entries, and other communications you send us.</li>
    </ul>
    <h3>Information collected automatically</h3>
    <p>We may automatically collect device and usage information, including your IP address, device and browser type, operating system, app version, language, identifiers, pages or screens viewed, referring pages, interactions, crash data, and access dates and times.</p>
    <h3>Cookies and similar technologies</h3>
    <p>Our website and service providers may use cookies, pixels, local storage, and similar technologies to remember preferences, maintain sessions, understand traffic, and improve performance. You can control cookies through your browser, although disabling them may affect parts of the Service.</p>
  </section>

  <section>
    <h2><span>02</span> How we use information</h2>
    <p>We may use the information we collect to:</p>
    <ul>
      <li>Provide, operate, maintain, personalize, and improve the Service.</li>
      <li>Create and manage accounts, save collections, process eligible transactions, and provide support.</li>
      <li>Monitor performance, troubleshoot errors, conduct research, and develop new features.</li>
      <li>Send service notices, security alerts, policy updates, and, where permitted, marketing communications.</li>
      <li>Detect and prevent fraud, misuse, security incidents, and violations of our Terms of Service.</li>
      <li>Comply with law and protect the rights, safety, and property of PlayKami, our users, and others.</li>
    </ul>
  </section>

  <section>
    <h2><span>03</span> Legal bases for processing</h2>
    <p>Where applicable law requires a legal basis, we process personal information based on your consent, performance of our contract with you, compliance with legal obligations, or our legitimate interests in operating, securing, and improving the Service, provided those interests are not overridden by your rights.</p>
  </section>

  <section>
    <h2><span>04</span> How we share information</h2>
    <p>We do not sell your personal information. We may share it with:</p>
    <ul>
      <li><strong>Service providers</strong> that support hosting, analytics, crash reporting, communications, customer support, security, and payment processing.</li>
      <li><strong>Authorities or other parties</strong> when we reasonably believe disclosure is required by law or necessary to prevent harm, fraud, abuse, or security issues.</li>
      <li><strong>Parties to a business transaction</strong> in connection with a merger, financing, acquisition, reorganization, bankruptcy, or sale of assets.</li>
      <li><strong>Other parties at your direction</strong> or with your consent.</li>
    </ul>
    <p>Providers may use information only to perform services for us and must protect it in accordance with their agreements and applicable law.</p>
  </section>

  <section>
    <h2><span>05</span> International transfers</h2>
    <p>Your information may be processed in countries other than where you live, including the United States. Where required, we use appropriate safeguards for international transfers, such as standard contractual clauses or equivalent mechanisms.</p>
  </section>

  <section>
    <h2><span>06</span> Data retention</h2>
    <p>We retain personal information for as long as reasonably necessary to provide the Service, fulfill the purposes described here, comply with legal obligations, resolve disputes, and enforce agreements. When information is no longer needed, we delete or anonymize it, subject to lawful backup and recordkeeping requirements.</p>
  </section>

  <section>
    <h2><span>07</span> Data security</h2>
    <p>We use reasonable technical and organizational measures designed to protect information from unauthorized access, loss, misuse, and alteration. No internet transmission or storage system is completely secure, so we cannot guarantee absolute security.</p>
  </section>

  <section>
    <h2><span>08</span> Your rights and choices</h2>
    <p>Depending on your location, you may have the right to request access to, correction of, deletion of, restriction of, or portability of your personal information, or to object to certain processing. You may also withdraw consent where processing relies on consent.</p>
    <p>To make a request, email <a href="mailto:contact@playkami.io">contact@playkami.io</a>. We may verify your identity before responding. You can opt out of marketing emails through the unsubscribe link in those messages; you will still receive necessary service communications.</p>
  </section>

  <section>
    <h2><span>09</span> Children's privacy</h2>
    <p>The Service is not directed to children under 13, and we do not knowingly collect personal information from children under 13. Where a higher minimum age applies, we comply with that requirement. If you believe a child has provided personal information in violation of this section, please contact us so we can take appropriate action.</p>
  </section>

  <section>
    <h2><span>10</span> Third-party services</h2>
    <p>The Service may link to third-party websites, applications, content, or services, including the Apple App Store. Their privacy practices are governed by their own policies. We are not responsible for third-party content or privacy practices.</p>
  </section>

  <section>
    <h2><span>11</span> Changes to this policy</h2>
    <p>We may update this Privacy Policy from time to time. We will revise the "Last updated" date and may provide additional notice when required. Your continued use of the Service after an update means the revised policy applies to your future use.</p>
  </section>

  <section>
    <h2><span>12</span> Contact us</h2>
    <p>For questions, concerns, complaints, or privacy requests, contact:</p>
    <address><strong>Kami Tech LLC</strong><br />8 The Green, Suite R<br />Dover, DE 19901<br />United States<br /><a href="mailto:contact@playkami.io">contact@playkami.io</a></address>
  </section>`

const termsOfService = `
  <p class="legal-kicker">Legal · Terms</p>
  <h1>Terms of Service</h1>
  <p class="legal-updated">Last updated: August 25, 2026</p>
  <div class="legal-intro">
    <p>These Terms of Service (the "Terms") are a legally binding agreement between you and <strong>Kami Tech LLC</strong>, a Delaware limited liability company ("PlayKami," "we," "us," or "our"), governing your use of the PlayKami website, mobile application, and related services (collectively, the "Service").</p>
    <p>By accessing or using the Service, you agree to these Terms and our <a href="/privacy-policy">Privacy Policy</a>. If you do not agree, do not use the Service.</p>
    <p><strong>Important:</strong> Section 16 contains a binding individual arbitration agreement and class-action waiver. You may opt out within 30 days as described in that section.</p>
  </div>

  <section>
    <h2><span>01</span> Eligibility and accounts</h2>
    <p>You must be at least 18 years old and legally able to enter into a contract to use the Service. You agree to provide accurate, current information, keep your login credentials secure, and promptly notify us at <a href="mailto:contact@playkami.io">contact@playkami.io</a> if you suspect unauthorized access. You are responsible for activity under your account.</p>
    <p>You may not sell, rent, transfer, or share your account, create an account for someone else without authorization, or access the Service through unauthorized tools.</p>
  </section>

  <section>
    <h2><span>02</span> The Service</h2>
    <p>PlayKami lets eligible users select digital card packs, reveal randomized digital collectible cards, and view those cards in an in-app collection. Features, card availability, pack contents, odds, pricing, and access may vary by location, platform, account, or version of the Service.</p>
    <p>Unless PlayKami expressly states otherwise at the point of use, preview credits, card values, marketplace activity, offers, and transactions shown in the Service are simulated. They have no cash value, are not legal tender, cannot be withdrawn, and do not represent an investment or ownership of any physical item.</p>
  </section>

  <section>
    <h2><span>03</span> Packs, random results, and digital cards</h2>
    <p>Pack contents are determined randomly from the pool and odds shown before opening. You cannot choose the specific cards you receive. Opening a pack reveals the result assigned by the Service, and that result is final except where required by law or where we confirm a technical error.</p>
    <p>Digital cards are limited, revocable, personal licenses to access and display content within the Service. They do not grant ownership of underlying artwork, characters, trademarks, intellectual property, physical cards, or any monetary value. You may not transfer, sell, redeem, or use a digital card outside the Service unless a feature expressly permits it and provides separate terms.</p>
    <p>Any rarity, grade, comparison, or estimated value is informational or simulated and may change. We do not guarantee accuracy, future availability, scarcity, resale value, or financial return.</p>
  </section>

  <section>
    <h2><span>04</span> Purchases, credits, and refunds</h2>
    <p>If paid features become available, prices and applicable taxes will be displayed before purchase. Purchases made through Apple or another third-party platform are processed by that platform and are also subject to its terms. We do not receive or store your full payment-card details.</p>
    <p>Except where required by law or the applicable platform's rules, purchases are final once digital content or a pack has been delivered or opened. Refund requests for App Store purchases must generally be submitted to Apple. You are responsible for charges authorized through your account and for any device, data, or carrier fees.</p>
    <p>Credits or other in-service balances are licensed, not sold; have no cash value; are non-transferable; and may be modified or discontinued where permitted by law. They may not be exchanged for money or used outside the Service.</p>
  </section>

  <section>
    <h2><span>05</span> Intellectual property</h2>
    <p>The Service and its software, design, text, graphics, logos, interfaces, audio, and other content (together, "Content") are owned by PlayKami or its licensors and are protected by intellectual-property laws. Third-party card art, names, characters, and marks belong to their respective owners.</p>
    <p>Subject to these Terms, PlayKami grants you a limited, revocable, non-exclusive, non-transferable, non-sublicensable license to access and use the Service and Content for personal, non-commercial purposes. No other rights are granted.</p>
  </section>

  <section>
    <h2><span>06</span> User content and feedback</h2>
    <p>If the Service permits you to submit profile information, messages, images, comments, or other material ("User Content"), you retain your ownership rights and grant PlayKami a worldwide, non-exclusive, royalty-free, sublicensable license to host, reproduce, adapt, display, and distribute it as reasonably necessary to operate, improve, secure, and promote the Service.</p>
    <p>You represent that you have the rights needed to submit User Content and that it does not violate law or another person's rights. We may remove or restrict User Content that violates these Terms. Feedback you voluntarily provide may be used by PlayKami without restriction or compensation.</p>
  </section>

  <section>
    <h2><span>07</span> Prohibited conduct</h2>
    <p>You may not, and may not help others to:</p>
    <ul>
      <li>Use the Service unlawfully, fraudulently, deceptively, or to infringe another person's rights.</li>
      <li>Impersonate another person, provide false information, access another account, or evade an account restriction.</li>
      <li>Interfere with, damage, overload, test without authorization, or bypass the security or access controls of the Service.</li>
      <li>Reverse engineer, copy, modify, scrape, index, or use automated tools on the Service except where law expressly permits it.</li>
      <li>Manipulate pack results, odds, values, rankings, offers, promotions, or other Service systems.</li>
      <li>Upload malicious code, harass others, collect personal information without permission, or use the Service for unauthorized advertising.</li>
      <li>Use the Service or its content to train a machine-learning model without our written permission.</li>
    </ul>
  </section>

  <section>
    <h2><span>08</span> Third-party services</h2>
    <p>The Service may contain third-party content or links to services we do not control. Your use of those services is governed by their own terms and policies. PlayKami does not endorse and is not responsible for third-party services, content, availability, security, or transactions.</p>
  </section>

  <section>
    <h2><span>09</span> Promotions</h2>
    <p>Giveaways, sweepstakes, contests, or similar promotions may be governed by separate official rules. If those rules conflict with these Terms, the official rules control for that promotion. Promotions are void where prohibited and eligibility, entry methods, prize details, and odds will be stated in the applicable rules.</p>
  </section>

  <section>
    <h2><span>10</span> Suspension and termination</h2>
    <p>We may investigate suspected violations and suspend or terminate access, remove content, or limit features if we reasonably believe you violated these Terms, created risk or legal exposure, or misused the Service. You may stop using the Service at any time.</p>
    <p>We may modify, suspend, or discontinue all or part of the Service. Where reasonably practicable, we will provide notice of material changes. Provisions that by their nature should survive termination will survive, including ownership, disclaimers, liability limits, indemnity, and dispute resolution.</p>
  </section>

  <section>
    <h2><span>11</span> Disclaimer of warranties</h2>
    <p class="legal-caps">To the fullest extent permitted by law, the Service and Content are provided "as is" and "as available." PlayKami and its suppliers disclaim all express or implied warranties, including merchantability, fitness for a particular purpose, title, and non-infringement. We do not warrant that the Service will be uninterrupted, secure, error-free, or accurate, or that any digital card, feature, or content will remain available.</p>
    <p>Some jurisdictions do not allow certain warranty exclusions, so some of the above may not apply to you.</p>
  </section>

  <section>
    <h2><span>12</span> Limitation of liability</h2>
    <p class="legal-caps">To the fullest extent permitted by law, PlayKami and its officers, employees, affiliates, licensors, and service providers will not be liable for indirect, incidental, special, consequential, exemplary, or punitive damages, or for loss of profits, revenue, goodwill, use, or data, arising from the Service or these Terms, even if advised that such damages are possible.</p>
    <p class="legal-caps">PlayKami's total aggregate liability arising from the Service or these Terms will not exceed the greater of US$100 or the amount you paid to PlayKami for the Service during the six months before the event giving rise to the claim.</p>
    <p>These limits apply only to the extent permitted by law. Nothing in these Terms excludes liability that cannot lawfully be excluded.</p>
  </section>

  <section>
    <h2><span>13</span> Indemnification</h2>
    <p>To the extent permitted by law, you agree to defend, indemnify, and hold harmless PlayKami and its affiliates, officers, employees, agents, and service providers from claims, losses, liabilities, and reasonable costs arising from your misuse of the Service, your User Content, your violation of these Terms, or your violation of another person's rights.</p>
  </section>

  <section>
    <h2><span>14</span> Electronic communications</h2>
    <p>You consent to receive notices electronically, including by email, in-app message, or posting through the Service. Electronic notices satisfy legal requirements that communications be in writing. Keep your account contact information current.</p>
  </section>

  <section>
    <h2><span>15</span> Governing law</h2>
    <p>These Terms are governed by the laws of the State of California, without regard to conflict-of-law rules. The Federal Arbitration Act governs the arbitration provision below. Any dispute not subject to arbitration or small-claims court will be brought exclusively in the state or federal courts located in San Francisco, California, and each party consents to their jurisdiction.</p>
  </section>

  <section>
    <h2><span>16</span> Dispute resolution and arbitration</h2>
    <p><strong>Informal resolution.</strong> Before filing a claim, you and PlayKami agree to try to resolve the dispute informally for 30 days. Send a written notice describing the dispute and requested relief to <a href="mailto:legal@playkami.io">legal@playkami.io</a>.</p>
    <p><strong>Binding individual arbitration.</strong> Except for eligible small-claims matters and claims seeking injunctive relief for infringement or misuse of intellectual property, disputes arising from these Terms or the Service will be resolved by binding individual arbitration administered by JAMS under the rules applicable to the claim. Arbitration may occur by video, telephone, written submissions, or in San Francisco, California, as the arbitrator determines appropriate. The arbitrator may award the same individual remedies available in court.</p>
    <p class="legal-caps"><strong>Jury and class-action waiver.</strong> You and PlayKami waive the right to a jury trial. Claims must be brought only in an individual capacity, not as a plaintiff or class member in a class, collective, consolidated, or representative proceeding.</p>
    <p><strong>30-day opt out.</strong> You may opt out of arbitration by emailing <a href="mailto:legal@playkami.io">legal@playkami.io</a> within 30 days after first accepting these Terms. Include your full name, mailing address, account email or username, and a clear statement that you opt out of arbitration. Opting out does not affect the rest of these Terms.</p>
  </section>

  <section>
    <h2><span>17</span> Changes to these Terms</h2>
    <p>We may update these Terms from time to time. We will update the date above and provide additional notice where required. Changes apply prospectively. If you do not agree to revised Terms, you must stop using the Service.</p>
  </section>

  <section>
    <h2><span>18</span> General terms</h2>
    <p>These Terms and any applicable supplemental terms are the entire agreement between you and PlayKami concerning the Service. If a provision is unenforceable, it will be limited or removed to the minimum extent necessary, and the remaining provisions will continue. Our failure to enforce a provision is not a waiver. You may not assign these Terms without our consent; we may assign them in connection with a merger, acquisition, reorganization, or sale of assets.</p>
    <p>You agree to comply with applicable export-control and sanctions laws. These Terms do not create any partnership, employment, agency, or third-party beneficiary relationship.</p>
  </section>

  <section>
    <h2><span>19</span> Contact</h2>
    <address><strong>Kami Tech LLC</strong><br />8 The Green, Suite R<br />Dover, DE 19901<br />United States<br />General: <a href="mailto:contact@playkami.io">contact@playkami.io</a><br />Legal: <a href="mailto:legal@playkami.io">legal@playkami.io</a></address>
  </section>`

const pages = {
  '/privacy-policy': {
    title: 'Privacy Policy | PlayKami',
    description: 'Learn how PlayKami collects, uses, and protects your information.',
    content: privacyPolicy
  },
  '/terms-of-service': {
    title: 'Terms of Service | PlayKami',
    description: 'Read the terms that govern your use of PlayKami.',
    content: termsOfService
  },
  '/tos': {
    title: 'Terms of Service | PlayKami',
    description: 'Read the terms that govern your use of PlayKami.',
    content: termsOfService
  }
}

export const getLegalPage = (pathname) => pages[pathname.replace(/\/$/, '') || '/']

export const renderLegalPage = (page) => {
  document.title = page.title
  document.querySelector('meta[name="description"]')?.setAttribute('content', page.description)
  document.querySelector('#app').innerHTML = `
    <div class="site-shell" id="top">
      ${legalHeader()}
      <main id="main" class="legal-page">
        <article class="legal-document">${page.content}</article>
      </main>
      ${legalFooter()}
    </div>`
}
