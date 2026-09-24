const legalHeader = () => `
  <header class="site-header legal-header">
    <a class="brand" href="/" aria-label="RumbyTCG home"><img class="brand__mark" src="/assets/rumby-mark.png" alt="" /><img class="brand__wordmark" src="/assets/rumby-wordmark.png" alt="RumbyTCG" /></a>
    <a class="legal-header__back" href="/">Back to home <span aria-hidden="true">→</span></a>
  </header>`

const legalFooter = () => `
  <footer class="site-footer legal-footer">
    <div class="footer-main">
      <div class="footer-brand">
        <a class="brand brand--footer" href="/"><img class="brand__mark" src="/assets/rumby-mark.png" alt="" /><img class="brand__wordmark" src="/assets/rumby-wordmark.png" alt="RumbyTCG" /></a>
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
        <span>The Social Experiment LLC<br />8 The Green, Suite R<br />Dover, DE 19901<br />United States</span>
      </address>
    </div>
    <div class="footer-bottom">
      <p>© ${new Date().getFullYear()} The Social Experiment LLC. All rights reserved.</p>
      <a href="#top">Back to top ↑</a>
    </div>
  </footer>`

const privacyPolicy = `
  <p class="legal-kicker">Legal · Privacy</p>
  <h1>PRIVACY POLICY</h1>
  <p class="legal-updated">Last updated: September 24, 2026</p>

  <section>
    <h2><span>01</span> Introduction</h2>
<p>This Privacy Policy describes how <strong>The Social Experiment LLC (“The Social Experiment”, “we”, “us”, or “our”)</strong> collects, uses, stores, and shares information when you use <a href="https://rumbycollectibles.io">rumbycollectibles.io</a>, our RumbyTCG mobile application, and related services (collectively, the <strong>“Service”</strong>).</p>
<p>The Service includes collectible packs and draws, account collections, buybacks, physical item redemption and shipping, promotions, and eligible balance withdrawals. We use Clerk for user authentication and Stripe for payment processing and Stripe Connect payouts.</p>
<p>This policy explains our data practices; where consent is required, we will request it separately. For questions or privacy requests, email <a href="mailto:contact@rumbycollectibles.io">contact@rumbycollectibles.io</a>.</p>
  </section>

  <section>
    <h2><span>02</span> Information We Collect</h2>
<h3>2.1 Account and authentication information</h3>
<p>Clerk manages sign-in and authentication for the Service. We receive an account identifier, email address, email verification status, and name or username from Clerk, and use authentication session information to recognize your account and protect access. Clerk processes the credentials and verification information required by the sign-in method you choose. Our application backend verifies Clerk-issued sessions rather than storing your sign-in password.</p>
<p>We also collect profile details, referral information, notification and privacy preferences, support requests, feedback, and other information you choose to provide.</p>
<h3>2.2 Purchases, balances, and activity</h3>
<p>We keep records of balance top-ups, purchases, pack openings and draw results, item ownership and buybacks, points, promotions, refunds, payment disputes, and withdrawal requests. These records may include amounts, currencies, dates, transaction identifiers, status information, and records used to verify draw results or investigate errors.</p>
<h3>2.3 Payments and payouts</h3>
<p>Stripe processes payment details. We receive transaction references, amounts, currencies, payment method type, and payment, refund, or dispute status. We do not store full payment card numbers or card security codes in our application backend.</p>
<p>If you request a withdrawal, Stripe Connect collects the information required to set up and verify your payout account, which may include identity, tax, and bank details. We receive the connected account identifier, payout eligibility and verification requirement status, and transfer and payout records. Information you submit directly to Stripe is also handled under <a href="https://stripe.com/privacy">Stripe’s Privacy Policy</a>.</p>
<h3>2.4 Shipping information</h3>
<p>For physical item redemptions, we collect the recipient and delivery details you provide, including name, shipping address, and contact details, together with shipping charges, courier information, and tracking and fulfillment records.</p>
<h3>2.5 Information collected automatically</h3>
<p>We and our service providers may collect usage and technical information such as pages or features used, interaction times, IP address, browser and device information, operating system, language, referring pages, session information, and security or error logs.</p>
<h3>2.6 Cookies and similar technologies</h3>
<p>We and our service providers, including Clerk and Stripe, may use cookies, local storage, and similar technologies for sign-in, session management, payment functionality, fraud prevention, preferences, and performance. Where required, we obtain consent for non-essential technologies. You can control cookies through your browser, although disabling essential technologies may prevent sign-in, payments, or other features from working.</p>
  </section>

  <section>
    <h2><span>03</span> How We Use Your Information</h2>
<p>We use information to:</p>
<ul>
<li>Create and manage accounts, authenticate users through Clerk, and protect sessions.</li>
<li>Operate packs and draws, maintain collections and ownership records, and process buybacks, points, and promotions.</li>
<li>Process Stripe payments, reconcile balances, manage refunds and disputes, and facilitate eligible Stripe Connect withdrawals.</li>
<li>Arrange physical redemptions, delivery, tracking, and customer support.</li>
<li>Maintain transaction and draw-verification records, diagnose errors, and improve the Service.</li>
<li>Send account, security, transaction, shipping, and policy notices, and optional marketing communications where permitted.</li>
<li>Detect fraud, abuse, and unauthorized activity, enforce our agreements, resolve disputes, and meet legal, accounting, and tax obligations.</li>
</ul>
  </section>

  <section>
<h2><span>04</span> Legal Bases for Processing (If Applicable)</h2>
<p>Where required by applicable data protection laws (such as the GDPR in the EU/EEA or UK GDPR), we process your personal data based on one or more of the following legal bases:</p>
<ul>
<li>Your consent.</li>
<li>Performance of a contract with you (e.g., to provide the Service).</li>
<li>Compliance with a legal obligation.</li>
<li>Our legitimate interests (e.g., securing the Service, improving functionality, preventing abuse), provided they are not overridden by your rights and interests.</li>
</ul>
  </section>

  <section>
    <h2><span>05</span> How We Share Information</h2>
<p>We do not sell your personal information. We may share information as follows:</p>
<h3>5.1 Authentication, payments, and service providers</h3>
<p><strong>Clerk:</strong> We use Clerk to manage user authentication and accounts. Clerk processes authentication and account data on our behalf under our service agreement. Information about Clerk’s data processing is available in its <a href="https://clerk.com/legal/dpa">Data Processing Addendum</a>; Clerk’s own website and business activities are described in its <a href="https://clerk.com/legal/privacy">Privacy Policy</a>.</p>
<p><strong>Stripe:</strong> We share payment and transaction information with Stripe to process payments, refunds, disputes, and eligible payouts through Stripe Connect. Stripe may also process information for its own fraud prevention and legal compliance purposes, as described in <a href="https://stripe.com/privacy">Stripe’s Privacy Policy</a>.</p>
<p>We share the information needed to fulfill physical redemptions with shipping and fulfillment providers. We may also use hosting, communications, analytics, and support providers. Providers processing data on our behalf must protect it and use it in accordance with their agreements and applicable law.</p>
<h3>5.2 Other users and public features</h3>
<p>Profile details, activity, collections, and information you publish may be visible to others according to the feature and your privacy settings.</p>
<h3>5.3 Legal and safety</h3>
<p>We may disclose information when reasonably necessary to comply with law or legal process, enforce our agreements, investigate fraud or security incidents, or protect the rights, property, or safety of The Social Experiment, our users, or others.</p>
<h3>5.4 Business transfers and your instructions</h3>
<p>Information may be transferred in connection with a merger, acquisition, restructuring, or sale of assets, subject to applicable data protection requirements. We may also share information at your direction or with your consent.</p>
  </section>

  <section>
<h2><span>06</span> International Data Transfers</h2>
<p>We may process and store information on servers located in countries other than your country of residence. These countries may have data protection laws that differ from those in your jurisdiction.
Where required by law, we will take reasonable steps to ensure that appropriate safeguards (such as standard contractual clauses or equivalent mechanisms) are in place to protect your information when it is transferred internationally.</p>
  </section>

  <section>
    <h2><span>07</span> Data Retention</h2>
<p>We retain information for as long as needed to provide the Service, maintain ownership and transaction records, resolve disputes, prevent fraud, and meet legal, accounting, tax, and recordkeeping obligations. Retention depends on the type of information and purpose; closing an account does not necessarily remove records of completed transactions, outstanding balances, shipments, payment disputes, or payouts.</p>
<p>When information is no longer needed, we delete or anonymize it, subject to applicable recordkeeping and backup requirements. Clerk and Stripe may retain information under their applicable agreements and legal obligations, including where Stripe processes data for its own purposes.</p>
  </section>

  <section>
<h2><span>08</span> Data Security</h2>
<p>We implement reasonable technical and organizational measures designed to protect your information from unauthorized access, loss, misuse, or alteration.
However, no method of transmission over the internet or method of electronic storage is completely secure. We cannot guarantee absolute security, and you use the Service at your own risk.</p>
  </section>

  <section>
<h2><span>09</span> Your Rights and Choices</h2>
<p>Depending on your location and applicable laws, you may have certain rights with respect to your personal information, including:</p>
<ul>
<li><strong>Access</strong>: Request confirmation that we process your data and obtain a copy.</li>
<li><strong>Correction</strong>: Request that we correct or update inaccurate or incomplete data.</li>
<li><strong>Deletion</strong>: Request that we delete your personal information (subject to legal and legitimate business exceptions).</li>
<li><strong>Restriction</strong>: Request that we restrict how we process your data in certain circumstances.</li>
<li><strong>Objection</strong>: Object to certain types of processing, including direct marketing.</li>
<li><strong>Portability</strong>: Request a copy of your data in a structured, commonly used, and machine-readable format, where technically feasible.</li>
</ul>
<p>To exercise any of these rights (where applicable), contact us at <a href="mailto:contact@rumbycollectibles.io">contact@rumbycollectibles.io</a>. You may also request account deletion through this contact address. Uninstalling the app does not delete your account or the records we hold. We may ask you to verify your identity before responding to your request, and we will respond within the time period required by applicable law.
You may also:</p>
<ul>
<li>Opt out of marketing emails at any time by using the “unsubscribe” link in those emails or contacting us directly.</li>
</ul>
<p>You can manage available profile, collection visibility, and notification preferences in your account. Opting out of marketing does not stop necessary account, payment, shipping, security, or legal notices.</p>
<p>Where applicable law permits, you may use an authorized agent to make a privacy request. We may ask for evidence of their authority. You may appeal a decision about your request by contacting us, and you may complain to the relevant data protection authority. Where processing depends on consent, you may withdraw it without affecting earlier lawful processing.</p>
  </section>

  <section>
<h2><span>10</span> Children’s Privacy</h2>
<p>The Service is intended for people aged 18 or older, subject to any higher age requirement in our Terms. We do not knowingly collect personal information from children under 13. If you believe a child has provided personal information or someone under 18 is using the Service, contact <a href="mailto:contact@rumbycollectibles.io">contact@rumbycollectibles.io</a> so we can investigate and take appropriate action.</p>
  </section>

  <section>
<h2><span>11</span> Third-Party Links and Services</h2>
<p>The Service may contain links to third-party websites, services, or content that we do not control. If you click on a third-party link, you will be directed to that third party’s site. Their privacy practices are governed by their own policies, not this Privacy Policy. We are not responsible for the content or privacy practices of third-party sites or services.</p>
  </section>

  <section>
<h2><span>12</span> Changes to This Privacy Policy</h2>
<p>We may update this Privacy Policy from time to time. When we do, we will revise the “Last updated” date at the top of this page. In some cases, we may provide additional notice (such as a banner on the site or email notification).
Where required, we will obtain your consent before applying changes that require it.</p>
  </section>

  <section>
<h2><span>13</span> Contact Us</h2>
<p>If you have any questions, concerns, or complaints about this Privacy Policy or our data practices, or if you wish to exercise your rights, you can contact us at:</p>
<p>The Social Experiment LLC</p>
<p>Email: <a href="mailto:contact@rumbycollectibles.io">contact@rumbycollectibles.io</a></p>
  </section>`

const termsOfService = `
  <p class="legal-kicker">Legal · Terms</p>
  <h1>TERMS OF SERVICE</h1>
  <p class="legal-updated">Last updated: September 24, 2026</p>
  <div class="legal-intro">
<p>These Terms of Service (the <strong>“Terms”</strong>) are a legally binding agreement between you and <strong>The Social Experiment LLC</strong>, a limited liability company (<strong>“The Social Experiment”, “we”, “us”, or “our”</strong>), governing your use of our website, the RumbyTCG mobile application, and related services (the <strong>“Service”</strong>). Supplemental terms presented for a particular feature form part of this agreement and control for that feature if they conflict with these Terms.</p>
<p>By accessing or using the Service, including buying packs, participating in draws, requesting buybacks or shipping, or funding or withdrawing eligible balances, you agree to these Terms. Please also read our <a href="/privacy-policy">Privacy Policy</a>. If you do not agree to these Terms, do not use the Service.</p>
<p><strong>Section 26 contains an individual arbitration agreement and class-action waiver, including a 30-day right to opt out. Please read it carefully.</strong></p>
</div>

  <section>
<h2><span>01</span> Modification</h2>
<p>The Social Experiment reserves the right to modify this Agreement at any time in our sole discretion. If we make changes, we will provide notice by email, through the Service, or by updating the &quot;Last Updated&quot; date above. Your continued use of the Service after such changes constitutes acceptance of the revised Terms. We encourage you to review this Agreement frequently. If you do not agree to any revised terms, you must discontinue using the Service.</p>
  </section>

  <section>
<h2><span>02</span> Privacy</h2>
<p>Please refer to our Privacy Policy at <a href="https://rumbycollectibles.io/privacy-policy">https://rumbycollectibles.io/privacy-policy</a> for information about how we collect, use, and share your personal information. By submitting data through the Service, you consent to the collection, use, and disclosure of your personal data in accordance with the Privacy Policy.</p>
  </section>

  <section>
    <h2><span>03</span> The Service</h2>
<p>The Social Experiment operates RumbyTCG, which provides collectible purchasing and collection features, including randomized packs and draws, buybacks, and physical redemption and shipping. Features depend on availability, location, account eligibility, and the rules shown in the Service.</p>
<p>An <strong>“Item”</strong> is a collectible recorded in your account, including a physical collectible held for fulfillment where indicated. Item ownership, transactions, and balances are recorded in our account system. The item description identifies what you acquire and whether it is eligible for physical delivery. Acquiring an Item does not grant intellectual property rights in its artwork, brand, or other protected content.</p>
  </section>

  <section>
    <h2><span>04</span> Accounts and Clerk Authentication</h2>
<p>You access your account through Clerk, our authentication provider, using an available sign-in method. Provide accurate information, maintain access to your sign-in method, protect your credentials and devices, and promptly report suspected unauthorized access to <a href="mailto:contact@rumbycollectibles.io">contact@rumbycollectibles.io</a>.</p>
<p>You are responsible for activity you authorize through your account. You may not sell, rent, or share account access, impersonate another person, use another person’s credentials, or bypass account restrictions. Account recovery and verification may require completion of the security steps presented through Clerk.</p>
<p><strong>Account closure:</strong> To request closure, email <a href="mailto:contact@rumbycollectibles.io">contact@rumbycollectibles.io</a>. Before closing, arrange eligible withdrawals and delivery or eligible buybacks of remaining Items. Outstanding transactions, disputes, and legally required records may need to be resolved or retained. A closure request does not itself waive your rights to balances or Items.</p>
  </section>

  <section>
    <h2><span>05</span> Payments, Balances, and Stripe</h2>
<p>Payments are processed through Stripe using the methods made available at checkout, which may include payment cards, Apple Pay, and Google Pay. Prices, currencies, applicable fees, and taxes are shown with the relevant transaction. You authorize the charge you confirm and must use a payment method you are entitled to use.</p>
<p>A balance top-up becomes available after payment confirmation. Your account may separately record funded balances, earned buyback proceeds, pending amounts, and promotional points. Spending availability and withdrawal eligibility can differ. Points are governed by Section 11; cash withdrawals are governed by Section 8.</p>
<p>Payments may require additional authentication or review. Failed, refunded, disputed, or reversed payments may result in corresponding balance adjustments, transaction restrictions, or recovery of amounts owed, subject to applicable law. Contact us about errors or unauthorized charges; nothing in these Terms limits rights you have under applicable payment or consumer law.</p>
<p>You are responsible for applicable taxes and charges arising from your transactions, except where collection or payment is our legal responsibility. Payment processing does not make Stripe the seller of the collectible.</p>
<p>Keep copies of transaction confirmations and the terms shown when you purchase, request a buyback, redeem, or withdraw. Include the relevant transaction reference when contacting support about an error.</p>
  </section>

  <section>
    <h2><span>06</span> Item Storage, Redemption, and Shipping</h2>
<p>Eligible physical Items may be held for you until you request delivery, accept an eligible buyback offer, or an applicable automatic buyback occurs under Section 7. Your account records the Item and its current status. Any retention deadline associated with an acquisition is shown with its terms.</p>
<p>To redeem an Item for delivery, you must own it, satisfy applicable eligibility checks, provide accurate recipient and shipping details, and pay the shipping, handling, taxes, and duties applicable to your order. Availability depends on the Item, destination, and supported shipping services. Items involved in another pending transaction may be unavailable for redemption.</p>
<p>After a redemption request, Items are reserved for fulfillment and cannot also be bought back. Cancellation is available only while the request remains eligible for cancellation. Delivery estimates are estimates; we will provide available tracking information. Promptly contact us about missing, damaged, or incorrect shipments so we can investigate. Your statutory delivery and consumer rights remain unaffected.</p>
  </section>

  <section>
    <h2><span>07</span> Buybacks and Inventory Deadlines</h2>
<p>The Social Experiment may offer to buy back eligible Items. The applicable amount, currency, eligibility, and any deadline are shown in the Service. For eligible pack or draw acquisitions, the buyback amount is based on the valuation and buyback percentage recorded at acquisition, rounded down to the smallest unit of the applicable currency; later catalog valuation changes do not change those recorded terms.</p>
<p>When a buyback completes, ownership returns to The Social Experiment and the proceeds are credited to your account, subject to any applicable hold or withdrawal restrictions. A buyback is a separate sale of the Item and is not a refund of the pack or draw purchase. Items with no buyback entitlement are not eligible for this acquisition-based buyback.</p>
<p><strong>Automatic buybacks:</strong> Where an acquisition includes a retention deadline and automatic buyback terms, you authorize The Social Experiment to buy back the eligible Item after that deadline at its recorded buyback amount and credit the proceeds to your account. Review the deadline and redeem or otherwise manage the Item before it expires if you wish to retain it. Items being redeemed are ineligible while in that state; cancelling a redemption after the deadline may make the Item eligible for automatic buyback.</p>
<p>For bulk buybacks, each Item is evaluated separately. Only successfully completed sales transfer ownership and generate proceeds; the result identifies any failed Items.</p>
  </section>

  <section>
    <h2><span>08</span> Withdrawals through Stripe Connect</h2>
<p>Where cash-out is available, eligible balances may be withdrawn through Stripe Connect. You must complete Stripe’s connected account onboarding, provide accurate payout and verification information, and maintain an account eligible to receive payouts. Stripe may request additional identity, tax, or bank information. Availability depends on supported countries, currencies, verification, and account status.</p>
<p>Your use of connected account services is subject to the applicable <a href="https://stripe.com/legal/connect-account">Stripe Connected Account Agreement</a> and the terms presented during onboarding. You authorize us to share the information necessary to facilitate your requested payouts, as described in our Privacy Policy.</p>
<p>Only the amount shown as available for withdrawal may be requested. Pending proceeds, reserved funds, promotional points, and amounts subject to disputes or reversals are not available for withdrawal. Funded balances may have different withdrawal eligibility from earned proceeds, as indicated in the Service.</p>
<p>A withdrawal reserves the requested amount while it is reviewed and processed. Approval, Stripe processing, bank settlement, verification requirements, and payment reversals can affect timing. Submission is not confirmation of payout, and we do not guarantee instant availability. A failed or cancelled request releases reserved funds only after we confirm that the funds have not been paid out or have been recovered.</p>
  </section>

  <section>
    <h2><span>09</span> Eligibility and Account Responsibilities</h2>
<p>You must be at least 18 years old, meet any higher age requirement that applies where you live, and be legally able to enter into this agreement. Use only features that are lawful and available in your location.</p>
<p>Keep your account, contact, shipping, and payment information accurate and current. We or our providers may request information to verify eligibility, investigate unauthorized activity, prevent fraud, or comply with legal obligations. Transactions or access may be restricted while required information is missing or a review is pending.</p>
<p>You may not use unauthorized applications to access the Service, evade restrictions, or use an account or payment method without permission. Breaches may lead to suspension or termination subject to applicable law.</p>
  </section>

  <section>
    <h2><span>10</span> Representations and Warranties</h2>
<p>You represent that you have authority to enter into and perform this agreement, that the information you provide is accurate, and that your use of the Service and purchase or buyback of Items will not violate law, another person’s rights, or agreements binding on you.</p>
<p>You may not use the Service if doing so would violate applicable sanctions, export restrictions, or other legal prohibitions. You are responsible for the equipment, internet access, and related charges needed to access the Service.</p>
  </section>

  <section>
    <h2><span>11</span> Points and Promotions</h2>
<p>Points and promotional benefits may be earned or redeemed through the features and rules shown in the Service. Availability, qualifying actions, redemption options, limits, and any expiration are governed by the applicable promotion. Points are separate from your monetary balance, cannot be withdrawn as cash, and may only be used through supported features.</p>
<p>You may not obtain benefits through false accounts, referral abuse, automation, or other manipulation. We may correct errors or reverse improperly awarded benefits, subject to applicable law. Giveaways and sweepstakes are also subject to Section 28 and their official rules.</p>
  </section>

  <section>
    <h2><span>12</span> Randomized Packs and Draws</h2>
<p>Packs and draws, including Oripa boards where offered, award Items from the eligible inventory under the price, selection rules, and odds shown for that feature. Results are random; you cannot choose or guarantee a particular Item. Review the applicable rules before confirming a purchase or using points.</p>
<p>Completed results are recorded in your account. Where available, draw-verification information allows you to check the recorded result. Inventory and eligibility rules vary by feature; an Item returned through a buyback may become available for a subsequent pack. A board’s rules may exclude Items previously awarded on that board.</p>
<p>Displayed valuations are estimates and do not guarantee resale value, profit, or recovery of your purchase price. Buyback entitlements, if any, are governed by Section 7.</p>
<p><strong>Responsible purchasing:</strong> Set a spending budget you can afford and take a break if purchases become difficult to control. Random outcomes do not promise a financial return.</p>
<p>Once a paid pack is opened or a draw is completed, purchases are final except where a refund or other remedy is required by law or appropriate for a confirmed error. Dissatisfaction with a random result alone does not entitle you to a refund. Contact <a href="mailto:contact@rumbycollectibles.io">contact@rumbycollectibles.io</a> for payment, result, or fulfillment errors.</p>
  </section>

  <section>
<h2><span>13</span> Consent to Electronic Communication</h2>
<p>Consent to necessary service notices is separate from optional marketing preferences. Where marketing consent is required, we request it separately, and you can opt out of marketing without closing your account.</p>
<p>By contacting The Social Experiment via email, social media, or by using the Service, you consent to receive electronic communications from The Social Experiment. These may include notices about your Service use and are part of your relationship with us. You agree that electronic communications satisfy any legal requirements that such communications be in writing. Maintain copies by printing or saving electronic communications. We have no obligation to store such communications for your later use.</p>
  </section>

  <section>
<h2><span>14</span> Our Intellectual Property Rights</h2>
<p>The Service and all content, features, materials and functionality therein, including the RumbyTCG logo, designs, text, graphics, pictures, information, data, software, sound files, and their selection and arrangement (collectively, &quot;<strong>Content</strong>&quot;), are the proprietary property of The Social Experiment or our affiliates or licensors. You receive no rights to the Service or its Materials except as expressly granted in these Terms and all rights not expressly granted are reserved. Any unauthorized use may violate these Terms and applicable laws.
You may not use metatags or &quot;hidden text&quot; utilizing &quot;The Social Experiment&quot; or any other name, trademark, or product or service name without permission. The Service&#x27;s look and feel, including page headers, custom graphics, button icons, and scripts, constitute our trade dress and may not be copied or used without permission. All other trademarks, product names, and logos are the property of their respective owners.</p>
  </section>

  <section>
<h2><span>15</span> License to Our Service and Content</h2>
<p>You are granted a limited, revocable, non-exclusive, non-transferable, non-assignable, non-sublicensable, &quot;as-is&quot; license to access and use the Service and Content for personal, non-commercial use, provided such license does not include any right to:</p>
<ol>
<li>Sell, resell, or commercially use the Service or Content;</li>
<li>Distribute, publicly perform, or publicly display any Content except as expressly permitted;</li>
<li>Modify or make derivative uses except as expressly permitted;</li>
<li>Use data mining, robots, or similar methods;</li>
<li>Download any portion except as expressly permitted; or</li>
<li>Use the Service or Content other than for their intended purposes. This license is subject to the prohibited activities in Section 18.</li>
</ol>
<p>You are granted a limited, non-exclusive, non-transferable right to create text hyperlinks to the Service for non-commercial purposes, provided such links do not portray The Social Experiment in a false, misleading, or defamatory manner, and provided the linking site contains no adult, illegal, offensive, or objectionable material. This right may be revoked at any time. You may not use our logo to link to the Service without written permission, nor use framing techniques to enclose any The Social Experiment trademark, logo, proprietary information, images, text, or page layout without written consent.</p>
<p>The Social Experiment may update, suspend, or discontinue features, or restrict access to address security incidents or violations of these Terms, subject to applicable law. Item retention and automatic buybacks are governed by Section 7. Changes to access do not eliminate obligations or rights that survive under these Terms or applicable law.</p>
  </section>

  <section>
<h2><span>16</span> User Content</h2>
<p><strong>Definition</strong>. &quot;User Content&quot; means any content, materials, or information that you create, upload, submit, post, transmit, or otherwise make available on or through the Service, including text, images, photographs, videos, audio files, comments, messages, profile information, and any other content or data.</p>
<p><strong>Responsibility</strong>. You are solely responsible for your User Content and the consequences of posting or publishing it. You acknowledge that User Content you submit may be viewable by other users of the Service and, depending on your privacy settings, the general public.</p>
<p><strong>License Grant to Company</strong>. By making any User Content available on or through the Service, you grant to The Social Experiment a non-exclusive, worldwide, royalty-free, perpetual, irrevocable, sublicensable, and transferable license to use, copy, reproduce, modify, adapt, create derivative works from, distribute, publicly perform, publicly display, and otherwise exploit such User Content in any form and any medium, whether now known or hereafter developed, for the purposes of operating, providing, improving, and promoting the Service and The Social Experiment&#x27;s business operations.</p>
<p><strong>License Grant to Other Users</strong>. You also grant each user of the Service a non-exclusive license to access your User Content through the Service and to use, reproduce, distribute, display, and perform such User Content solely as permitted through the functionality of the Service and in accordance with this Agreement.</p>
<p><strong>Representations and Warranties</strong>. You represent and warrant that: (i) you own all rights in and to your User Content or have obtained all necessary permissions, licenses, consents, and authorizations to grant the rights and licenses set forth herein; (ii) your User Content does not and will not infringe, misappropriate, or violate any third party&#x27;s intellectual property rights, rights of privacy or publicity, or any other proprietary rights; (iii) your User Content does not contain any material that is defamatory, obscene, unlawful, threatening, harassing, or otherwise objectionable; and (iv) your User Content complies with all applicable laws, rules, and regulations.</p>
<p><strong>Feedback</strong>. If you provide The Social Experiment with any ideas, suggestions, concepts, proposals, improvements, recommendations, feedback, or other input regarding the Service or The Social Experiment&#x27;s products, services, or business operations (collectively, &quot;Feedback&quot;), you acknowledge and agree that: (i) such submission is voluntary and made at your own risk, and The Social Experiment has no obligation, express or implied, to treat such Feedback as confidential or proprietary; (ii) The Social Experiment may have already developed or received similar ideas, suggestions, or proposals from other sources; (iii) you irrevocably assign to The Social Experiment all right, title, and interest in and to such Feedback, including all intellectual property rights therein, and The Social Experiment may use, reproduce, modify, distribute, publicly display, publicly perform, prepare derivative works of, incorporate into other works, and otherwise freely exploit such Feedback for any purpose whatsoever, commercial or otherwise, without restriction, attribution, compensation, or notice to you; (iv) to the extent any such assignment is not permitted or effective under applicable law, you hereby grant The Social Experiment a perpetual, irrevocable, non-exclusive, royalty-free, fully paid-up, worldwide, sublicensable, and transferable license to use, reproduce, modify, distribute, publicly display, publicly perform, prepare derivative works of, incorporate into other works, and otherwise exploit such Feedback for any purpose; and (v) you waive any moral rights or equivalent rights you may have in such Feedback. You represent and warrant that you have all rights necessary to submit such Feedback and to grant the foregoing rights to The Social Experiment.</p>
<p><strong>No Obligation to Monitor</strong>. The Social Experiment has no obligation to monitor, review, or edit User Content, but reserves the right to do so at any time in its sole discretion. We may, but are not obligated to, remove or disable access to any User Content that we determine, in our sole discretion, violates this Agreement, infringes any intellectual property or other rights, or is otherwise objectionable.</p>
<p><strong>Retention</strong>. Following termination or deactivation of your account, or if you remove any User Content from the Service, The Social Experiment may retain your User Content for a reasonable period of time for backup, archival, audit, or legal purposes. Furthermore, copies of your User Content may remain viewable in cached or archived pages, or may have been copied or stored by other users.</p>
<p><strong>Disclaimer</strong>. The Social Experiment does not endorse any User Content or any opinion, recommendation, or advice expressed therein. The Social Experiment expressly disclaims any and all liability in connection with User Content. You understand that by using the Service, you may be exposed to User Content that is inaccurate, offensive, indecent, or objectionable, and you agree to waive any legal or equitable rights or remedies you may have against The Social Experiment with respect thereto.</p>
  </section>

  <section>
<h2><span>17</span> Third-Party Service; Third-Party Terms</h2>
<p>The Service may contain links to third-party properties, services, and applications (&quot;<strong>Third-Party Service</strong>&quot;). When you click on such links, you are subject to those parties&#x27; terms and policies. Third-Party Services are not under The Social Experiment&#x27;s control. The Social Experiment is not responsible for any Third-Party Service and provides links only as a convenience, without review, approval, endorsement, or warranty. You use Third-Party Service links at your own risk. When you leave our Service, our terms and policies no longer govern. Review all applicable agreements before proceeding with any third-party transaction.</p>
  </section>

  <section>
<h2><span>18</span> Prohibited Activities</h2>
<p>You agree to abide by this Agreement and will not (and will not attempt to):</p>
<ol>
<li>Provide false or misleading information to The Social Experiment;</li>
<li>Use or attempt to use another User&#x27;s account or payment method without authorization;</li>
<li>Misrepresent an Item’s identity, ownership, or condition when requesting a buyback or redemption;</li>
<li>Impersonate another person or entity;</li>
<li>Use the Service in any manner that could interfere with, disrupt, or negatively affect other Users or damage, disable, overburden, or impair the Service;</li>
<li>Develop, utilize, or disseminate software or interact with any API in any manner that could harm the Service;</li>
<li>Reverse engineer any aspect of the Service or attempt to discover source code or bypass access limitations;</li>
<li>Attempt to circumvent content-filtering techniques or access unauthorized features or areas;</li>
<li>Use unauthorized robots, spiders, scrapers, browser extensions, or other automated means to access the Service or extract data;</li>
<li>Collect or harvest data for contacting individuals, companies, or entities, or use such data for direct marketing (including email, SMS, telemarketing, or direct marketing);</li>
<li>Bypass or ignore automated access instructions;</li>
<li>Use the Service for illegal or unauthorized purposes, or engage in activity violating applicable law or this Agreement;</li>
<li>Use the Service for illegal activities, including money laundering, terrorist financing, or activities adversely affecting Service performance;</li>
<li>Manipulate transaction records, collectible valuations, or buyback eligibility to obtain an improper benefit;</li>
<li>Use the Service for financial activities subject to registration or licensing, including securities, debt, or equity financings;</li>
<li>Manipulate pack or draw results, exploit payment errors, abuse refunds or chargebacks, or obtain points or promotional benefits through deception.</li>
</ol>
  </section>

  <section>
<h2><span>19</span> Copyright</h2>
<p>The Social Experiment retains the absolute right to terminate access and remove User Content for any User who violates or infringes our rights or third-party rights. If you believe that any content on the Service infringes your copyright, you may submit a notification pursuant to the Digital Millennium Copyright Act by providing The Social Experiment&#x27;s designated copyright agent with the information required under 17 U.S.C. § 512(c)(3). Our designated copyright agent for notice of alleged infringement is:
Email: <a href="mailto:legal@rumbycollectibles.io">legal@rumbycollectibles.io</a>
Subject Line: Copyright Agent</p>
  </section>

  <section>
<h2><span>20</span> Investigations</h2>
<p>If The Social Experiment becomes aware of possible Agreement violations, we reserve the right (but have no obligation) to investigate. If we believe criminal activity may have occurred, we reserve the right to refer the matter to and cooperate with applicable legal authorities. Except as prohibited by law, we may disclose any information or materials in our possession in connection with your use of the Service: (i) to comply with applicable laws, legal process, or governmental requests; (ii) to enforce this Agreement; (iii) to respond to third-party claims that User Content violates their rights; (iv) to respond to customer service requests; or (v) to protect the rights, property, or safety of The Social Experiment, its Users, or the public. By agreeing to this Agreement, you irrevocably consent to the foregoing. Personal information handled in connection with an investigation remains subject to our Privacy Policy and applicable law.</p>
  </section>

  <section>
<h2><span>21</span> Release</h2>
<p>You hereby release and forever discharge The Social Experiment and our officers, employees, agents, successors, and assigns (the &quot;<strong>The Social Experiment Entities</strong>&quot;) from, and waive and relinquish, each past, present, and future dispute, claim, controversy, demand, right, obligation, liability, action, and cause of action of every kind (including personal injuries, death, and property damage) that has arisen or arises directly or indirectly out of, or relates to, the Service (including interactions with other Users or Third-Party Service).</p>
<p><strong>YOU HEREBY WAIVE CALIFORNIA CIVIL CODE SECTION 1542, OR ANY SIMILAR LAW OR RULE OF ANY OTHER JURISDICTION, WHICH STATES: &quot;A GENERAL RELEASE DOES NOT EXTEND TO CLAIMS THAT THE CREDITOR OR RELEASING PARTY DOES NOT KNOW OR SUSPECT TO EXIST IN HIS OR HER FAVOR AT THE TIME OF EXECUTING THE RELEASE AND THAT, IF KNOWN BY HIM OR HER, WOULD HAVE MATERIALLY AFFECTED HIS OR HER SETTLEMENT WITH THE DEBTOR OR RELEASED PARTY.&quot;</strong></p>
  </section>

  <section>
    <h2><span>22</span> Collectible and Transaction Risks</h2>
<p>Collectible values and demand can change. We do not promise that an Item will retain value, sell at a particular price, or produce a profit. A displayed estimate is not a guarantee of market value. Randomized purchases may award Items worth less than the amount paid.</p>
<p>Service interruptions, account compromise, payment disputes, incorrect information, and shipping problems can affect transactions. Use accurate details, protect your account, and promptly report issues. We may restrict an Item or transaction while investigating fraud, ownership conflicts, or errors, subject to applicable law and your rights under these Terms.</p>
  </section>

  <section>
<h2><span>23</span> Tax Compliance and Prohibited Transactions</h2>
<p>You may not falsify transaction amounts, ownership records, or shipping declarations to evade taxes. We may investigate suspected fraud and report it to the appropriate authorities as required or permitted by law.</p>
  </section>

  <section>
    <h2><span>24</span> Disclaimers</h2>
<p><strong>TO THE FULLEST EXTENT PERMITTED BY LAW, THE SERVICE AND CONTENT ARE PROVIDED “AS IS” AND “AS AVAILABLE.” THE SOCIAL EXPERIMENT DISCLAIMS IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT. WE DO NOT GUARANTEE UNINTERRUPTED, ERROR-FREE, OR SECURE ACCESS, OR A PARTICULAR COLLECTIBLE VALUE, RANDOM RESULT, RESALE OPPORTUNITY, OR PAYMENT PROCESSING TIME.</strong></p>
<p>Clerk, Stripe, shipping carriers, and other providers operate services outside our direct control. Interruptions or restrictions affecting them may affect the Service. This does not remove our obligations for our own services or any responsibility that cannot lawfully be excluded.</p>
<p>Nothing in these Terms excludes or limits liability for fraud, death or personal injury caused by negligence, or other liability that cannot be excluded under applicable law. Mandatory consumer protections and any express commitments made with a transaction remain applicable.</p>
  </section>

  <section>
<h2><span>25</span> Limitation of Liability</h2>
<p><strong>TO THE FULLEST EXTENT PERMITTED BY LAW, THE SOCIAL EXPERIMENT WILL NOT BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY LOST PROFIT OR ANY INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE DAMAGES ARISING FROM THIS AGREEMENT, THE SERVICE, OR ANY ITEMS, OR FOR DAMAGES RELATED TO LOSS OF REVENUE, PROFITS, BUSINESS, ANTICIPATED SAVINGS, USE, GOODWILL, OR DATA, WHETHER CAUSED BY TORT (INCLUDING NEGLIGENCE), BREACH OF CONTRACT, OR OTHERWISE, EVEN IF FORESEEABLE AND EVEN IF THE SOCIAL EXPERIMENT HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.</strong></p>
<p><strong>WITHOUT LIMITING THE FOREGOING, THE SOCIAL EXPERIMENT WILL NOT BE LIABLE FOR ANY LOSS ARISING FROM ANY ACTION TAKEN IN RELIANCE ON SERVICE MATERIAL OR INFORMATION, INCLUDING ANY RECOMMENDATION, OR FOR ANY PURCHASE OR USE OF ITEMS, INCLUDING LOSSES, DAMAGES, OR CLAIMS ARISING FROM: (I) USER ERROR SUCH AS FORGOTTEN PASSWORDS, INCORRECTLY CONSTRUCTED TRANSACTIONS, OR MISTYPED ADDRESSES; (II) SERVER FAILURE OR DATA LOSS; (III) COMPROMISED ACCOUNT CREDENTIALS; (IV) UNAUTHORIZED ACCESS TO APPLICATIONS; OR (V) UNAUTHORIZED THIRD-PARTY ACTIVITIES, INCLUDING VIRUSES, PHISHING, BRUTEFORCING, OR OTHER ATTACKS.</strong></p>
<p><strong>ACCESS TO AND USE OF THE SERVICE IS AT YOUR OWN DISCRETION AND RISK, AND YOU ARE SOLELY RESPONSIBLE FOR ANY DAMAGE TO YOUR COMPUTER SYSTEM OR MOBILE DEVICE OR LOSS OF DATA RESULTING THEREFROM.</strong></p>
<p><strong>NOTWITHSTANDING ANYTHING TO THE CONTRARY HEREIN, IN NO EVENT SHALL THE SOCIAL EXPERIMENT&#x27;S MAXIMUM AGGREGATE LIABILITY ARISING OUT OF OR RELATED TO THIS AGREEMENT, YOUR USE OF THE SERVICE, CONTENT, ITEM STORAGE AND FULFILLMENT SERVICES, OR ANY ITEMS EXCEED THE GREATER OF: (A) $100; OR (B) THE AMOUNT RETAINED BY THE SOCIAL EXPERIMENT IN THE TRANSACTION OR INCIDENT THAT IS THE SUBJECT OF THE CLAIM.</strong></p>
<p><strong>Some jurisdictions do not allow the exclusion or limitation of incidental or consequential damages, so the above limitation or exclusion may not apply to you.</strong></p>
  </section>

  <section>
<h2><span>26</span> Dispute Resolution</h2>
<p><strong>Agreement to Arbitrate</strong>. You and The Social Experiment agree that any dispute, claim, or controversy arising out of or relating to this Agreement, the Service, or your relationship with The Social Experiment (collectively, &quot;<strong>Disputes</strong>&quot;) will be resolved exclusively through final and binding arbitration, rather than in court, except that: (a) either party may assert claims in small claims court if the claims qualify; and (b) either party may seek injunctive or other equitable relief in a court of competent jurisdiction to prevent the actual or threatened infringement, misappropriation, or violation of intellectual property rights. This agreement to arbitrate is intended to be broadly interpreted and applies to all Disputes, whether based in contract, tort, statute, fraud, misrepresentation, or any other legal theory, and whether arising before or after the termination of this Agreement.</p>
<p><strong>Arbitration Rules and Procedures</strong>. The arbitration will be administered by JAMS pursuant to its Comprehensive Arbitration Rules and Procedures, or, for claims under $250,000, the Streamlined Arbitration Rules and Procedures, available at <a href="https://www.jamsadr.com">www.jamsadr.com</a>. The Federal Arbitration Act, 9 U.S.C. §§ 1-16, governs the interpretation and enforcement of this dispute resolution provision. To initiate arbitration, you must send a written demand for arbitration to The Social Experiment at <a href="mailto:legal@rumbycollectibles.io">legal@rumbycollectibles.io</a>, describing the nature of your claim and the relief sought. The Social Experiment will send any demand for arbitration to the email address associated with your account. The arbitration will be conducted in the English language and will take place in [Delaware], unless you and The Social Experiment agree otherwise or the arbitrator determines that such location would impose an undue burden on you, in which case the arbitration may be conducted by telephone, videoconference, or based on written submissions as determined by the arbitrator.</p>
<p><strong>Arbitration Fees and Costs</strong>. Payment of all filing, administration, and arbitrator fees will be governed by JAMS rules. If you demonstrate that such fees would be prohibitively burdensome compared to litigation, The Social Experiment will pay as much of the filing, administration, and arbitrator fees as the arbitrator deems necessary to prevent the arbitration from being prohibitively burdensome. Each party shall bear its own attorneys&#x27; fees and costs unless the arbitrator determines that a claim or defense was frivolous or brought for an improper purpose, in which case the arbitrator may award reasonable attorneys&#x27; fees and costs to the prevailing party.</p>
<p><strong>Authority of Arbitrator</strong>. The arbitrator shall have exclusive authority to resolve all Disputes, including any claim that all or any part of this dispute resolution provision is void or voidable. The arbitrator shall have the authority to grant any remedy that would otherwise be available in court, provided that the arbitrator may not award relief that exceeds what this Agreement permits. The arbitrator&#x27;s decision shall be final and binding and may be entered as a judgment in any court of competent jurisdiction.</p>
<p><strong>Waiver of Jury Trial</strong>. YOU AND THE SOCIAL EXPERIMENT HEREBY WAIVE ANY CONSTITUTIONAL AND STATUTORY RIGHTS TO SUE IN COURT AND TO HAVE A TRIAL IN FRONT OF A JUDGE OR A JURY. You and The Social Experiment are instead electing to resolve all Disputes through arbitration as set forth herein. In the event that any Dispute is determined to be non-arbitrable, you and The Social Experiment agree to waive any right to a jury trial with respect to such Dispute.</p>
<p><strong>Waiver of Class and Collective Relief</strong>. ALL DISPUTES MUST BE BROUGHT IN THE PARTIES&#x27; INDIVIDUAL CAPACITY AND NOT AS A PLAINTIFF OR CLASS MEMBER IN ANY PURPORTED CLASS, COLLECTIVE, OR REPRESENTATIVE PROCEEDING. YOU AND THE SOCIAL EXPERIMENT EXPRESSLY WAIVE ANY RIGHT TO FILE OR PARTICIPATE IN A CLASS ACTION OR SEEK RELIEF ON A CLASS OR COLLECTIVE BASIS. The arbitrator may not consolidate more than one person&#x27;s claims and may not preside over any form of class, collective, or representative proceeding. If this waiver of class or collective relief is found to be unenforceable as to a particular Dispute, then that Dispute shall be severed and proceed in a court of competent jurisdiction, while all remaining Disputes shall proceed in arbitration on an individual basis.</p>
<p><strong>30-Day Right to Opt Out</strong>. You have the right to opt out of this agreement to arbitrate by sending written notice of your decision to opt out to <a href="mailto:support@rumbycollectibles.io">support@rumbycollectibles.io</a> within thirty (30) days of first accepting this Agreement. Your notice must include your name, mailing address, account username (if applicable), and a clear statement that you wish to opt out of this arbitration provision. If you opt out, neither you nor The Social Experiment will be required to arbitrate Disputes, and all other provisions of this Agreement will remain in effect. If you do not opt out within the 30-day period, you will be deemed to have agreed to this arbitration provision. Opting out of this arbitration provision does not affect any other arbitration agreements you may have entered into with The Social Experiment.</p>
<p><strong>Survival</strong>. This dispute resolution provision shall survive termination of this Agreement and your use of the Service.</p>
<p><strong>Modifications</strong>. If The Social Experiment makes any material changes to this dispute resolution provision, such changes will not apply to any Dispute for which you provided written notice to The Social Experiment prior to the date of the change.</p>
  </section>

  <section>
<h2><span>27</span> General</h2>
<p>The Service may be subject to U.S. export control laws and export or import regulations in other countries. You agree not to use, export, reexport, or transfer U.S. technical data acquired from The Social Experiment, or products utilizing such data, in violation of U.S. export laws or regulations. You may not use, export, import, or transfer the Service except as authorized by U.S. law, the laws of the jurisdiction where you obtained the Service, and any other applicable laws. You acknowledge that products, services, or technology provided by The Social Experiment are subject to U.S. export control laws and regulations. You shall comply with these laws and shall not, without prior U.S. government authorization, export, re-export, or transfer The Social Experiment products, services, or technology to any country in violation of such laws.
This Agreement and your access to and use of the Service shall be governed by and construed in accordance with the laws of the State of California, without regard to conflict of law principles. Any dispute not subject to arbitration or small claims court shall be resolved in state or federal courts of San Francisco, California.
If you are a California resident, you may report complaints to the Complaint Assistance Unit of the Division of Consumer Product of the California Department of Consumer Affairs at 1625 North Market Blvd, Suite N 112, Sacramento, CA 95834, or by telephone at (800) 952-5210.
We reserve the right in our sole discretion to: (i) modify, suspend, or discontinue the Service, or any features or parts thereof, temporarily or permanently, with or without notice; and (ii) terminate your right to access or use the Service at any time for any or no reason. We shall have no liability or obligation to you in connection with any such event, and you will not be entitled to a refund of any amounts already paid, to the fullest extent permitted by law.
If any term, clause, or provision of this Agreement is held invalid or unenforceable, that portion will be severable and will not affect the validity or enforceability of any remaining portion. This Agreement may not be transferred or assigned by you without our prior written consent. Our failure to assert any right or provision shall not constitute a waiver. Except as otherwise provided herein, this Agreement is intended solely for the benefit of The Social Experiment and you and shall not confer third-party beneficiary rights.</p>
  </section>

  <section>
<h2><span>28</span> Giveaways and Sweepstakes</h2>
<p><strong>Overview</strong>. From time to time, The Social Experiment may offer promotional giveaways, sweepstakes, contests, or similar incentive programs (&quot;Promotions&quot;). These Promotions are subject to this section, this Agreement, and any additional Official Rules provided for each Promotion. In any conflict, the Official Rules govern over this section, and this section governs over the remaining Terms.</p>
<p><strong>Eligibility</strong>. Participation is void where prohibited by law. You must meet all requirements in the Official Rules, including age, residency, and account status criteria. Certain Promotions may require a registered RumbyTCG account in good standing.</p>
<p><strong>No Purchase Necessary</strong>. Unless otherwise stated, no purchase or payment is required to enter or win. As an Alternate Method of Entry (&quot;AMOE&quot;), eligible users may enter by: creating a RumbyTCG account (if not already having one); logging in daily to claim points as specified in the Official Rules; and clicking the designated entry link on the Promotion page without purchase or payment. Entry link: <a href="https://rumbycollectibles.io/promotions">https://rumbycollectibles.io/promotions</a>. Specific details are outlined in the Official Rules. All AMOE entries must be received during the Promotion Period.</p>
<p><strong>Odds and Prizes</strong>. Odds of winning depend on eligible entries received. Prizes, approximate retail values, and relevant restrictions are described in the Official Rules. Any applicable taxes, fees, or expenses not specifically included in the prize are the winner&#x27;s sole responsibility.</p>
<p><strong>Winner Selection and Notification</strong>. Winners will be selected at random (or by criteria set forth in the Official Rules) from eligible entries. Winners will be notified using their RumbyTCG account contact information. You are responsible for ensuring your contact information is accurate and current.</p>
<p><strong>Compliance and Disqualification</strong>. We reserve the right to disqualify any participant who tampers with the entry process, circumvents rules, violates this Agreement, or engages in fraudulent or unethical behavior. We may cancel, suspend, or modify any Promotion due to force majeure or factors beyond our reasonable control, as permitted by law.</p>
<p><strong>Limitation of Liability</strong>. By participating, you acknowledge that The Social Experiment, its affiliates, subsidiaries, partners, and their officers, directors, employees, and agents will not be liable for any claims, losses, or damages arising from participation, including technical failures, unauthorized tampering, or non-delivery of communications.</p>
<p><strong>Governing Law and Venue</strong>. Unless otherwise specified, Promotions are governed by the laws specified in this Agreement without regard to conflict of law principles, and disputes shall be handled per the dispute resolution provisions herein.</p>
<p>By using the Service or participating in any Promotion, you agree to be bound by this section, this Agreement, and all applicable Official Rules.</p>
  </section>

  <section>
<h2><span>29</span> Contact Information</h2>
<p>The Social Experiment LLC, operator of RumbyTCG</p>
<p>Email: <a href="mailto:contact@rumbycollectibles.io">contact@rumbycollectibles.io</a></p>
<p>Legal: <a href="mailto:legal@rumbycollectibles.io">legal@rumbycollectibles.io</a></p>
<p>Address: 8 The Green, Suite R, Dover, DE 19901, United States</p>
  </section>`

const pages = {
  '/privacy-policy': {
    title: 'Privacy Policy | RumbyTCG',
    description: 'Learn how The Social Experiment collects, uses, and protects your information.',
    content: privacyPolicy
  },
  '/terms-of-service': {
    title: 'Terms of Service | RumbyTCG',
    description: 'Read the terms that govern your use of RumbyTCG.',
    content: termsOfService
  },
  '/tos': {
    title: 'Terms of Service | RumbyTCG',
    description: 'Read the terms that govern your use of RumbyTCG.',
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
