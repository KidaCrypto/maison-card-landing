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
  <h1>PRIVACY POLICY</h1>
  <p class="legal-updated">Last updated: November 30, 2025</p>

  <section>
<h2><span>01</span> Introduction</h2>
<p>This Privacy Policy describes how <strong>Kami Tech LLC (“Kami Tech”, “PlayKami”, “we”, “us”, or “our”)</strong> collects, uses, stores, and shares information when you use our website <a href="https://playkami.io">https://playkami.io</a> and any related services (collectively, the <strong>&quot;Service&quot;</strong>).
By accessing or using the Service, you agree to the collection and use of information in accordance with this Privacy Policy. If you do not agree, you should not use the Service.
If you have any questions about this Privacy Policy or our data practices, you can contact us at:</p>
<p>Email: <a href="mailto:contact@playkami.io">contact@playkami.io</a></p>
  </section>

  <section>
<h2><span>02</span> Information We Collect</h2>
<p>We may collect the following types of information when you use the Service:</p>
<h3>2.1 Information You Provide Directly</h3>
<p>This may include:</p>
<ul>
<li>Account details such as username, email address, and password.</li>
<li>Profile information or other details you choose to share.</li>
<li>Communication content when you contact us (e.g., support requests, feedback).</li>
<li>Payment-related information, if and when you make purchases through the Service (note: payment card details are typically processed by third-party payment processors, not directly by us).</li>
</ul>
<h3>2.2 Information Collected Automatically</h3>
<p>When you access or use the Service, we may automatically collect:</p>
<ul>
<li><strong>Usage data</strong>: pages viewed, features used, time and date of visits, referring/exit pages, clicks, and other interaction data.</li>
<li><strong>Device and technical data</strong>: IP address, browser type and version, device type, operating system, language settings, and similar technical information.</li>
</ul>
<h3>2.3 Cookies and Similar Technologies</h3>
<p>We and our third-party service providers may use cookies, web beacons, pixels, and similar technologies to:</p>
<ul>
<li>Recognize you when you return to the Service.</li>
<li>Keep you logged in.</li>
<li>Analyze traffic and usage patterns.</li>
<li>Improve features and performance.
You can usually set your browser to refuse cookies or indicate when a cookie is being sent. If you disable cookies, some parts of the Service may not function properly.</li>
</ul>
  </section>

  <section>
<h2><span>03</span> How We Use Your Information</h2>
<p>We use the information we collect for purposes including:</p>
<ul>
<li>
<p>Providing and maintaining the Service</p>
</li>
<li>
<ul>
<li>Operating the website and game features.</li>
</ul>
</li>
<li>
<ul>
<li>Creating and managing your account.</li>
</ul>
</li>
<li>
<ul>
<li>Processing transactions and providing customer support.</li>
</ul>
</li>
<li>
<p>Improving and developing the Service</p>
</li>
<li>
<ul>
<li>Monitoring performance and usage.</li>
</ul>
</li>
<li>
<ul>
<li>Debugging, testing, and enhancing existing features.</li>
</ul>
</li>
<li>
<ul>
<li>Developing new features, content, or services.</li>
</ul>
</li>
<li>
<p>Communication</p>
</li>
<li>
<ul>
<li>Sending important notices related to your account or the Service (e.g., security alerts, changes to terms or policies).</li>
</ul>
</li>
<li>
<ul>
<li>Responding to your requests, questions, and feedback.</li>
</ul>
</li>
<li>
<ul>
<li>Sending optional marketing or promotional communications, if permitted by law and your preferences (you can opt out at any time).</li>
</ul>
</li>
<li>
<p>Security and enforcement</p>
</li>
<li>
<ul>
<li>Detecting, preventing, and addressing fraud, abuse, security incidents, or other harmful activity.</li>
</ul>
</li>
<li>
<ul>
<li>Enforcing our Terms of Service and other agreements.</li>
</ul>
</li>
<li>
<ul>
<li>Complying with legal obligations.</li>
</ul>
</li>
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
<p>We do <strong>not</strong> sell your personal information. We may share information in these situations:</p>
<h3>5.1 Service Providers</h3>
<p>We may share information with third-party vendors and service providers who perform services on our behalf, such as:</p>
<ul>
<li>Hosting and cloud infrastructure</li>
<li>Analytics and crash reporting</li>
<li>Payment processors</li>
<li>Email delivery and customer support tools</li>
</ul>
<p>These providers are only permitted to use your information as necessary to provide services to us and are required to protect it in a manner consistent with this Privacy Policy.</p>
<h3>5.2 Legal and Safety</h3>
<p>We may disclose information if we believe in good faith that such action is necessary to:</p>
<ul>
<li>Comply with a law, regulation, legal process, or government request.</li>
<li>Protect the rights, property, or safety of Kami Tech LLC, our users, or others.</li>
<li>Detect, prevent, or otherwise address fraud, security, or technical issues.</li>
</ul>
<h3>5.3 Business Transfers</h3>
<p>If we are involved in a merger, acquisition, asset sale, restructuring, or similar transaction, your information may be transferred as part of that transaction. We will use reasonable efforts to ensure that any new entity continues to protect your information consistent with this Privacy Policy.</p>
  </section>

  <section>
<h2><span>06</span> International Data Transfers</h2>
<p>We may process and store information on servers located in countries other than your country of residence. These countries may have data protection laws that differ from those in your jurisdiction.
Where required by law, we will take reasonable steps to ensure that appropriate safeguards (such as standard contractual clauses or equivalent mechanisms) are in place to protect your information when it is transferred internationally.</p>
  </section>

  <section>
<h2><span>07</span> Data Retention</h2>
<p>We retain personal information for as long as necessary to:</p>
<ul>
<li>Provide and maintain the Service;</li>
<li>Fulfill the purposes described in this Privacy Policy;</li>
<li>Comply with legal obligations;</li>
<li>Resolve disputes;</li>
<li>Enforce our agreements.</li>
</ul>
<p>When data is no longer needed, we will delete it or anonymize it so it can no longer be associated with you.</p>
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
<p>To exercise any of these rights (where applicable), contact us at contact@playkami.io. We may ask you to verify your identity before responding to your request, and we will respond within the time period required by applicable law.
You may also:</p>
<ul>
<li>Opt out of marketing emails at any time by using the “unsubscribe” link in those emails or contacting us directly.</li>
</ul>
  </section>

  <section>
<h2><span>10</span> Children’s Privacy</h2>
<p>The Service is not directed to children under the age of 13, and we do not knowingly collect personal information from children under 13. If you believe that a child under 13 has provided us with personal information, please contact us at contact@playkami.io, and we will take steps to delete such information as required by law.
If you are located in a region with a higher age of consent for data collection, we comply with applicable requirements in that region.</p>
  </section>

  <section>
<h2><span>11</span> Third-Party Links and Services</h2>
<p>The Service may contain links to third-party websites, services, or content that we do not control. If you click on a third-party link, you will be directed to that third party’s site. Their privacy practices are governed by their own policies, not this Privacy Policy. We are not responsible for the content or privacy practices of third-party sites or services.</p>
  </section>

  <section>
<h2><span>12</span> Changes to This Privacy Policy</h2>
<p>We may update this Privacy Policy from time to time. When we do, we will revise the “Last updated” date at the top of this page. In some cases, we may provide additional notice (such as a banner on the site or email notification).
Your continued use of the Service after any changes are posted will signify your acceptance of the updated Privacy Policy.</p>
  </section>

  <section>
<h2><span>13</span> Contact Us</h2>
<p>If you have any questions, concerns, or complaints about this Privacy Policy or our data practices, or if you wish to exercise your rights, you can contact us at:</p>
<p>Kami Tech LLC</p>
<p>Email: <a href="mailto://contact@playkami.io">contact@playkami.io</a></p>
  </section>`

const termsOfService = `
  <p class="legal-kicker">Legal · Terms</p>
  <h1>TERMS OF SERVICE</h1>
  <p class="legal-updated">Last Updated: 11/30/2025</p>
  <div class="legal-intro">
<p>These Terms of Service (the &quot;<strong>Terms</strong>&quot;) constitute a legally binding agreement between you (the &quot;User&quot;) and Kami Tech, LLC., a Delaware limited liability company (&quot;<strong>Playkami</strong>”), governing your access to and use of our services (as defined below). Certain services or elements of the Service, including any Playkami NFT (as defined below) or any Playkami profile hosted on social media platforms (e.g., Facebook, X, Discord, or Instagram), may be subject to additional or supplemental terms as set forth herein or in connection with such services (&quot;<strong>Supplemental Terms</strong>&quot;). Together with these Terms, the Supplemental Terms constitute the &quot;<strong>Agreement.</strong>&quot; In the event of any conflict, the Supplemental Terms shall control with respect to the applicable Service.</p>
<p><strong>IMPORTANT – PLEASE READ CAREFULLY</strong>: By browsing our website at <a href="https://playkami.io">https://playkami.io</a> (the &quot;<strong>Website</strong>&quot;), offering for sale or selling an Asset (as defined below), participating in the minting, purchase, acquisition, or sale of a Playkami NFT (either directly from us or through a Secondary Sale), making a Third-Party Purchase, storing or redeeming an Asset, participating in Playkami&#x27;s Discord server or other social media channels, or using any of our other services (collectively, the &quot;Service&quot;), you expressly acknowledge that you have read, understand, and agree to be bound by this Agreement. If you do not agree to these terms, you must not access or use the Website or any Service, including purchasing any Playkami NFT or offering for sale, selling, storing, or redeeming any Asset.</p>
<p><strong>THE SERVICE INCLUDES A MARKETPLACE THAT ALLOWS SELLERS (AS DEFINED HEREIN) TO OFFER AND SELL ASSETS AND PLAYKAMI NFTS TO BUYERS, AND BUYERS TO OFFER AND PURCHASE ASSETS AND PLAYKAMI NFTS FROM SELLERS. ALL ASSETS AVAILABLE THROUGH THE MARKETPLACE ARE FURNISHED BY OR ON BEHALF OF SELLERS. EXCEPT WHERE PLAYKAMI IS THE SELLER, WE SHALL NOT BE A PARTY TO, NOR HAVE ANY RESPONSIBILITY OR LIABILITY FOR, ANY DISPUTES BETWEEN YOU AND ANY SELLER REGARDING ANY ASSET.</strong></p>
<p><strong>These Terms contain a dispute resolution and arbitration provision (See Section 27). Please be aware that unless you opt out, (1) you may only pursue claims against us on an individual basis, not as a plaintiff or class member in any class or representative action; and (2) you agree to mandatory individual arbitration and waive your right to jury trial.</strong></p>
  </div>

  <section>
<h2><span>01</span> Modification</h2>
<p>Playkami reserves the right to modify this Agreement at any time in our sole discretion. If we make changes, we will provide notice by email, through the Service, or by updating the &quot;Last Updated&quot; date above. Your continued use of the Service after such changes constitutes acceptance of the revised Terms. We encourage you to review this Agreement frequently. If you do not agree to any revised terms, you must discontinue using the Service.</p>
  </section>

  <section>
<h2><span>02</span> Privacy</h2>
<p>Please refer to our Privacy Policy at https://playkami.io/privacy-policy for information about how we collect, use, and share your personal information. By submitting data through the Service, you consent to the collection, use, and disclosure of your personal data in accordance with the Privacy Policy.</p>
  </section>

  <section>
<h2><span>03</span> The Service</h2>
<p>From time to time, original NFTs (each, a &quot;<strong>Playkami NFT</strong>&quot;) will be made available for purchase through our Website. Each Playkami NFT represents a certain individual asset as depicted in or otherwise corresponding to the artwork or listing information embodied by such Playkami NFT (the &quot;<strong>Asset</strong>&quot;). Each Asset is owned by the individual or entity offering it for sale (the &quot;<strong>Seller</strong>&quot;). When an individual (the &quot;<strong>Initial Seller</strong>&quot;) desires to offer an Asset for sale, the Initial Seller may use the Service to offer a Playkami NFT depicting such Asset. Ownership of an Asset transfers upon sale of the corresponding Playkami NFT from the Seller to the buyer (the &quot;<strong>Buyer</strong>&quot;).</p>
  </section>

  <section>
<h2><span>04</span> Wallets</h2>
<p>To access certain features of the Service, including purchasing Playkami NFTs, you must connect a software-based digital wallet that allows you to purchase, store, and transact using cryptocurrency and non-fungible tokens (your &quot;<strong>Wallet</strong>&quot;). Transactions initiated through our Service are effected by third-party digital wallet extensions, and by using our Service, you agree that such transactions are governed by the terms and privacy policies of those extensions.</p>
<p>You acknowledge that certain information, including your Wallet&#x27;s public address and transactions, may be publicly viewable on the applicable blockchain. Playkami does not own, operate, or control any blockchain or Wallet. We are not an agent or intermediary of any User and do not store or control any Playkami NFTs, private keys, passwords, or other User property. Playkami cannot perform transactions or send messages on behalf of any User. All transactions are effected and recorded solely through User interactions with the respective blockchain, which is not under our control.</p>
  </section>

  <section>
<h2><span>05</span> Purchase and Sales of Playkami NFTs</h2>
<p>All pricing and payment terms for Playkami NFTs are as indicated at point of sale. Payment obligations are binding at the time of purchase. You may not substitute any other currency for the currency contracted at purchase. No currency fluctuation shall impact or excuse your payment obligations.</p>
<p>We do not guarantee that Playkami NFTs will be available for purchase when you seek to purchase one.</p>
<p>When you purchase a Playkami NFT from an Initial Seller on our Website, the NFT is minted directly into your connected Wallet. When you purchase from a subsequent Seller, the NFT transfers directly from the Seller to you. Except where Playkami is the Buyer or Seller, we do not hold custody of any Playkami NFT. Playkami NFTs may be transferred between Wallets on the Monad network.</p>
<p>You are responsible for ensuring your Wallet has sufficient funds to cover the full purchase cost, including: (i) transaction fees imposed by third-party payment processors, (ii) any Taxes (as defined below), and (iii) Gas Fees. &quot;Gas Fees&quot; are fees for computing energy required to process and validate blockchain transactions, which fluctuate with market conditions. Playkami does not receive and has no authority over Gas Fees.</p>
<p>Payments made through the Website are effectuated through the underlying blockchain. We have no control over or ability to reverse these payments. Playkami may add or change payment processing services at any time, subject to additional terms. Accepted cryptocurrencies are subject to change at our discretion. You acknowledge that Playkami has no liability for claims or damages arising from payment failures, including processing errors on the blockchain or bridge extension. You are solely responsible for confirming payment acceptance.</p>
<p>For purchase issues, please contact us at support@playkami.io. We will resolve issues in accordance with our then-current policies.</p>
<p>You are solely responsible for determining and paying all sales, use, value-added, and other taxes, duties, and assessments (excluding taxes on our net income) now or hereafter imposed by any governmental authority in connection with your use of the Website or transactions involving Playkami NFTs (collectively, &quot;<strong>Taxes</strong>&quot;). You will pay or reimburse us for all applicable Taxes and will not deduct such amounts from any payments, including Gas Fees.</p>
<p>When you purchase or acquire a Playkami NFT, you agree to be bound by any applicable terms and conditions, including payment of the Playkami Fee (regardless of whether enforced by the facilitating platform). You further agree to bind any subsequent purchaser to such terms.</p>
<p>By offering any Asset or Playkami NFT through the Service, you appoint Playkami as your limited payments agent solely for receiving, holding, and settling payments owed to you. Playkami will process and settle payments actually received, less any amounts owed to Playkami (including taxes and fees), subject to this Agreement. Payment received by Playkami on your behalf satisfies the payor&#x27;s obligation to you, regardless of whether Playkami settles such payment. If Playkami fails to settle any payment, your recourse is solely against Playkami, not the payor.</p>
  </section>

  <section>
<h2><span>06</span> Initial Seller Agreement</h2>
<p>When an Initial Seller makes an Asset available on the Service, they represent and warrant that: (i) they own the Asset; (ii) they have all necessary rights to make the Asset available and mint a corresponding Playkami NFT; (iii) they will not offer the Asset on any other service or marketplace while the corresponding Playkami NFT is available for sale; and (iv) the Asset complies with Playkami&#x27;s Listing Guidelines at https://playkami.io/listing-guidelines.</p>
<p>On or before the primary sale, the Initial Seller agrees to deliver the corresponding Asset to Playkami for storage. The Initial Seller bears sole responsibility for any loss or damage to the Asset prior to Playkami&#x27;s confirmed receipt.</p>
<p>Each Initial Seller shall receive a percentage of Net Revenue from the Asset Management Services provided with respect to Assets they originally made available (the &quot;<strong>Initial Seller Revenue Share</strong>&quot;). &quot;Net Revenue&quot; means total consideration received by Playkami as the Playkami Fee (&quot;<strong>Revenue</strong>&quot;), less any fees mutually agreed upon in writing.</p>
<p>Each Initial Seller must provide Playkami with a supported Wallet address to receive any cryptocurrency Net Revenue. Playkami has no liability arising from Wallet address, payment processor, or banking information errors you provide.</p>
<p>Playkami reserves the right, but has no obligation, to confirm each Asset&#x27;s provenance and condition. If Playkami reasonably determines that an Asset does not conform with the Initial Seller&#x27;s description or the Listing Guidelines, Playkami may return the Asset at the Initial Seller&#x27;s expense. If a Buyer has purchased a corresponding Playkami NFT, Playkami may cancel or refund such purchase per our then-current policies. Contact us at contact@playkami.io for more information.</p>
<p>You, not Playkami, are solely responsible for providing Buyer support in connection with Playkami NFTs corresponding to your Assets. While Playkami may elect to provide technical support, we have no obligation to do so.</p>
<p>In any dispute between you and a third party (including Buyers, Sellers, or payment providers) related to your Playkami NFTs or Assets, Playkami will not be a party. You are solely responsible for dispute resolution and shall have no recourse against Playkami for any such claims.</p>
<p>Playkami reserves the right to remove any Initial Seller and terminate their ability to offer Assets at any time, with or without notice, upon: (i) reasonable belief that the Initial Seller has breached this Agreement; or (ii) termination of the applicable Service.</p>
  </section>

  <section>
<h2><span>07</span> Asset Management Services</h2>
<p>Our Asset Management Services include receiving Assets from Initial Sellers, storing Assets on behalf of Playkami NFT owners, listing and relisting Assets as Playkami NFTs, and shipping Assets to owners upon redemption.</p>
<p>Each Playkami NFT purchase includes a fee payable to Playkami for Asset Management Services (the &quot;<strong>Playkami Fee</strong>&quot;). The Playkami Fee is a percentage of the total purchase price, deducted from the Buyer&#x27;s payment and remitted to Playkami.</p>
<p>Playkami represents that all Assets remain in our constructive possession following receipt until transferred to the then-current Playkami NFT owner. We use good faith efforts to maintain each Asset&#x27;s integrity through partnerships with best-in-class storage and shipping providers. Playkami maintains insurance covering Assets at fair market value. Notwithstanding the foregoing, Playkami shall not be liable for any loss, damage, or destruction except to the extent arising from our gross negligence or willful misconduct.</p>
<p>When you sell a Playkami NFT, you represent and warrant that you have no outstanding liabilities with respect to Asset Management Services, and you acknowledge that you shall assign to the Buyer (who shall assume by novation) your agreement with Playkami for such services (the &quot;<strong>Assumed Contract</strong>&quot;). The Initial Seller Revenue Share remains solely between the Initial Seller and Playkami. Upon sale and receipt of the Playkami Fee, Playkami releases the Seller from the Assumed Contract.</p>
<p>When you purchase a Playkami NFT, you acknowledge that: (i) the Seller is released from the Assumed Contract; (ii) you assume the Seller&#x27;s rights and obligations under the Assumed Contract by novation; and (iii) you are entering into a binding agreement with Playkami for Asset Management Services. You may terminate the Assumed Contract by: (y) selling the Playkami NFT and assigning the Assumed Contract to the Buyer by novation; or (z) redeeming the Playkami NFT for the underlying Asset.</p>
<p>After purchasing a Playkami NFT, you may request the associated Asset through the Website. As a precondition to Asset transfer, Playkami shall verify: (i) your identity; (ii) your compliance with this Agreement and eligibility to use the Service; and (iii) your ownership of the Playkami NFT. Upon Asset transfer, the associated Playkami NFT shall be burned.</p>
<p>Redemption may be subject to additional fees, including Taxes and shipping and handling fees, as determined at Playkami&#x27;s discretion and as set forth on the Service, subject to change.</p>
  </section>

  <section>
<h2><span>08</span> Third-Party Purchase Service</h2>
<p>You may be able to purchase NFTs offered by third parties through a Third-Party Purchase enabled by Playkami (the &quot;<strong>Third-Party Purchase Service</strong>&quot;). This enables a third-party offeror (&quot;<strong>Offeror</strong>&quot;) to make original NFTs (each, an &quot;<strong>Offeror NFT</strong>&quot;) available through such Offeror&#x27;s website. Playkami is not the seller or offeror of any Offeror NFT, associated physical assets, or embodied artwork (collectively, &quot;<strong>Offeror Materials</strong>&quot;). Playkami reserves the right, but has no obligation, to review Offeror Materials for authenticity and makes no representations or warranties regarding them. You bear full responsibility for verifying the identity, legitimacy, and authenticity of any Offeror Materials you purchase.</p>
<p>Any Third-Party Purchase is a contract between the Offeror and you. Playkami acts solely as a service provider to the Offeror and does not transfer legal ownership of any Offeror NFT. Playkami is not a party to any Third-Party Purchase.</p>
<p>Notwithstanding any conflicting Offeror terms, Playkami has no obligation to facilitate returns or refunds for Third-Party Purchases.</p>
  </section>

  <section>
<h2><span>09</span> Secondary Marketplace Sales of Playkami NFTs</h2>
<p>You may sell, trade, or distribute your Playkami NFTs on compatible smart contract-enabled secondary marketplaces, platforms, and exchanges operated by third parties (&quot;<strong>Secondary Marketplaces</strong>&quot;), subject to their terms and functionality. Playkami NFTs may not be compatible with all Secondary Marketplaces, and we make no guarantees about their availability or functionality.</p>
<p>We are not a party to any Secondary Marketplace transaction (each, a &quot;<strong>Secondary Sale</strong>&quot;), whether or not we receive a commission or fee. We are not liable for any loss in connection with any Secondary Sale. Playkami is not a party to any transaction or dispute between Sellers and Buyers of Playkami NFTs.</p>
<p>Any Secondary Sale is subject to the Playkami Fee, which may be automatically deducted from the payment. All Playkami Fees apply to the final sale price.</p>
  </section>

  <section>
<h2><span>10</span> Contractual Relationship</h2>
<p>By using this Service, you represent that you are at least eighteen (18) years of age, or that you are of age under the laws of your jurisdiction, and lawfully able to enter into contracts.</p>
<p>By using the Service, you agree to:</p>
<ol>
<li>Provide accurate, current, and complete information as requested;</li>
<li>Maintain and promptly update such information;</li>
<li>Maintain your Wallet&#x27;s security and accept all risks of unauthorized access; and</li>
<li>Immediately notify us of any suspected security breaches.</li>
</ol>
<p>You will not buy, sell, rent, or lease access to the Service without our written permission, or access the Service through unauthorized third-party applications.</p>
<p>Playkami may require additional information and documents from time to time, including at the request of competent authorities or to comply with applicable laws regarding anti-money laundering or counterterrorism financing. We may also require such information if we reasonably believe that:</p>
<ol>
<li>Your Wallet is being used for money laundering or illegal activity;</li>
<li>You have concealed or reported false information; or</li>
<li>Transactions may have been effected in breach of this Agreement. In such cases, we may pause or cancel your transactions until we have reviewed and accepted the requested information. If you fail to provide complete and accurate information, we may refuse to provide any Playkami NFT, Content, product, service, or further access to the Service.</li>
</ol>
<p>Your access to and use of the Service is subject to your continued compliance with these Terms and all applicable laws. If you breach these Terms, your right to access and use the Service will terminate immediately, without any further action by Company, except for those obligations expressly described by the Company in these Terms.</p>
  </section>

  <section>
<h2><span>11</span> Representations &amp; Warranties</h2>
<p>When using the Service, you represent and warrant to Playkami, its affiliates, and their representatives as follows:</p>
<ol>
<li><strong>Authority</strong>. You have all requisite capacity, power, and authority to enter into and perform your obligations under this Agreement, including minting, selling, or buying Playkami NFTs.</li>
<li><strong>Due Execution</strong>. This Agreement constitutes your legal, valid, and binding obligation, enforceable against you in accordance with its terms.</li>
<li><strong>Accuracy of Information</strong>. All information you provide, including your address and tax identification number, is accurate and complete.</li>
<li><strong>Sanctions</strong>. You are not, and will not authorize use of the Service by, any person: (1) in, under the control of, or a national or resident of any jurisdiction subject to a U.S. trade embargo (currently Cuba, Iran, North Korea, Syria, and the Crimea, Donetsk People&#x27;s Republic, and Luhansk People&#x27;s Republic regions of Ukraine); or (2) identified on any export- or sanctions-related restricted party list, including the U.S. Department of the Treasury&#x27;s Specially Designated Nationals and Blocked Persons List or the U.S. Department of Commerce&#x27;s Denied Persons List, Unverified List, or Entity List.</li>
<li><strong>Non-Contravention</strong>. This Agreement and your performance hereunder, including minting, listing, buying, or selling Playkami NFTs, will not: (i) if you are an entity, conflict with your charter documents or governing resolutions; (ii) contravene any third-party rights or applicable legal requirements; or (iii) result in any breach of any material contract, permit, or legal requirement applicable to you.</li>
<li><strong>Independent Investigation and Non-Reliance</strong>. You are sophisticated and experienced in minting or buying NFTs and other crypto assets. You have conducted an independent investigation and formed your own judgment regarding the benefits, risks, and necessary practices related to the Service. You understand that legal requirements pertaining to blockchain technologies and digital assets are uncertain and have independently investigated such requirements and resulting risks, including the possibility that digital assets may constitute securities. You irrevocably disclaim reliance upon any statements, representations, or information made available by Playkami in determining to enter this Agreement or use the Service.</li>
<li><strong>Litigation</strong>. There is no legal proceeding pending relating to your NFT- or digital asset-trading or blockchain technology-related activities.</li>
<li><strong>Compliance</strong>. You have not failed to comply with, and have not violated, any applicable legal requirement relating to blockchain technologies. No governmental investigation or review is pending or threatened against you, and no government order prohibits you from engaging in any conduct relating to the Service. You must provide all equipment necessary to connect to the Service, including hardware and software. You are solely responsible for any fees, including internet or mobile fees, incurred when accessing the Service.</li>
</ol>
<p>In the event of insolvency, bankruptcy, or cessation of Playkami&#x27;s operations, we have established procedures for returning physical assets to users. Users are responsible for covering shipping costs and associated taxes. The return process must be initiated within three months after such events. We will implement a structured process to identify, segregate, and return assets, and users will receive notification and instructions. Playkami will not offer monetary reimbursement except for facilitating asset returns.</p>
  </section>

  <section>
<h2><span>12</span> Auctions</h2>
<p><strong>Verified Phone Number</strong>. To participate in Playkami auctions, you must have a verified phone number attached to your account.</p>
<p><strong>Binding Bids</strong>. All bids are binding and final. You are responsible for ensuring sufficient funds before bidding.</p>
<p><strong>Proof of Funds</strong>. Playkami reserves the right to request proof of funds from any bidder at any time. Acceptable proof includes: proof of USDC in a user-owned wallet, or proof of funds in a user-owned bank account.</p>
<p><strong>Bid Revocation</strong>. Playkami may revoke any bid from a user unable to provide satisfactory proof of funds.</p>
<p><strong>Payment and Non-Payment</strong>. Successful bidders must pay within 7 days of auction ending. Failure to pay may result in account suspension and a ban from future Playkami products.</p>
  </section>

  <section>
<h2><span>13</span> Vending Machine</h2>
<p><strong>Random Card Purchase</strong>. he Vending Machine allow you to purchase digital sealed packs containing random cards at fixed prices. The specific card is determined randomly and cannot be chosen.</p>
<p><strong>Digital Sealed Packs</strong>. When applicable, sealed packs have opening rules that prevent opening before certain times and allow user-initiated opening until certain times. After the reveal period, Playkami will automatically reveal packs on behalf of owners. Rules may include auto-reveal upon purchase.</p>
<p><strong>Instant Sale (&quot;Buyback Offer&quot;)</strong>. Upon Vending Machine card purchase, you will receive an offer from Playkami at a percentage of fair market value as advertised. Upon acceptance, you will receive USDC funds in your Playkami wallet/account, usable on the marketplace or website.</p>
<p><strong>Fair Market Value</strong>. Fair market value is determined solely by Playkami at our discretion and is not subject to negotiation. We do not disclose our valuation methodology.</p>
<p><strong>Best-Effort Offer</strong>. Buyback offers are best-effort and limited in duration. Playkami makes no guarantee about offer promptness or availability.</p>
<p><strong>All Sales Final</strong>. All Vending Machine purchases are final and non-refundable. After purchase and pack opening, you may accept a buyback offer, list on the marketplace, transfer to another account, or redeem.</p>
<p><strong>No Guarantees</strong>. Playkami makes no guarantees regarding the specific card received, fair market value assigned, or buyback offer availability or timing. In cases where a specific card is not attainable, Playkami will reimburse the fair market value that was assigned to it.</p>
  </section>

  <section>
<h2><span>14</span> Consent to Electronic Communication</h2>
<p>By contacting Playkami via email, social media, or by using the Service, you consent to receive electronic communications from Playkami. These may include notices about your Service use and are part of your relationship with us. You agree that electronic communications satisfy any legal requirements that such communications be in writing. Maintain copies by printing or saving electronic communications. We have no obligation to store such communications for your later use.</p>
  </section>

  <section>
<h2><span>15</span> Our Intellectual Property Rights</h2>
<p>The Service and all content, features, materials and functionality therein, including the Playkami logo, designs, text, graphics, pictures, information, data, software, sound files, and their selection and arrangement (collectively, &quot;<strong>Content</strong>&quot;), are the proprietary property of Playkami or our affiliates or licensors. You receive no rights to the Service or its Materials except as expressly granted in these Terms and all rights not expressly granted are reserved. Any unauthorized use may violate these Terms and applicable laws.
You may not use metatags or &quot;hidden text&quot; utilizing &quot;Playkami&quot; or any other name, trademark, or product or service name without permission. The Service&#x27;s look and feel, including page headers, custom graphics, button icons, and scripts, constitute our trade dress and may not be copied or used without permission. All other trademarks, product names, and logos are the property of their respective owners.</p>
  </section>

  <section>
<h2><span>16</span> License to Our Service and Content</h2>
<p>You are granted a limited, revocable, non-exclusive, non-transferable, non-assignable, non-sublicensable, &quot;as-is&quot; license to access and use the Service and Content for personal, non-commercial use, provided such license does not include any right to:</p>
<ol>
<li>Sell, resell, or commercially use the Service or Content;</li>
<li>Distribute, publicly perform, or publicly display any Content except as expressly permitted;</li>
<li>Modify or make derivative uses except as expressly permitted;</li>
<li>Use data mining, robots, or similar methods;</li>
<li>Download any portion except as expressly permitted; or</li>
<li>Use the Service or Content other than for their intended purposes. This license is subject to the Acceptable Use Policy in Section 14.</li>
</ol>
<p>You are granted a limited, non-exclusive, non-transferable right to create text hyperlinks to the Service for non-commercial purposes, provided such links do not portray Playkami in a false, misleading, or defamatory manner, and provided the linking site contains no adult, illegal, offensive, or objectionable material. This right may be revoked at any time. You may not use our logo to link to the Service without written permission, nor use framing techniques to enclose any Playkami trademark, logo, proprietary information, images, text, or page layout without written consent.</p>
<p>Playkami may change or discontinue any aspect of the Service at any time, including by: (i) altering smart contracts pursuant to upgrades, forks, security responses, or chain migrations; (ii) deactivating or deleting Content determined to be abandoned; or (iii) repossessing Playkami NFTs determined to be abandoned or used in violation of this Agreement. In such events, you may no longer be able to access or interact with the Service.</p>
  </section>

  <section>
<h2><span>17</span> User Content</h2>
<p><strong>Definition</strong>. &quot;User Content&quot; means any content, materials, or information that you create, upload, submit, post, transmit, or otherwise make available on or through the Service, including text, images, photographs, videos, audio files, comments, messages, profile information, and any other content or data.</p>
<p><strong>Responsibility</strong>. You are solely responsible for your User Content and the consequences of posting or publishing it. You acknowledge that User Content you submit may be viewable by other users of the Service and, depending on your privacy settings, the general public.</p>
<p><strong>License Grant to Company</strong>. By making any User Content available on or through the Service, you grant to Playkami a non-exclusive, worldwide, royalty-free, perpetual, irrevocable, sublicensable, and transferable license to use, copy, reproduce, modify, adapt, create derivative works from, distribute, publicly perform, publicly display, and otherwise exploit such User Content in any form and any medium, whether now known or hereafter developed, for the purposes of operating, providing, improving, and promoting the Service and Playkami&#x27;s business operations.</p>
<p><strong>License Grant to Other Users</strong>. You also grant each user of the Service a non-exclusive license to access your User Content through the Service and to use, reproduce, distribute, display, and perform such User Content solely as permitted through the functionality of the Service and in accordance with this Agreement.</p>
<p><strong>Representations and Warranties</strong>. You represent and warrant that: (i) you own all rights in and to your User Content or have obtained all necessary permissions, licenses, consents, and authorizations to grant the rights and licenses set forth herein; (ii) your User Content does not and will not infringe, misappropriate, or violate any third party&#x27;s intellectual property rights, rights of privacy or publicity, or any other proprietary rights; (iii) your User Content does not contain any material that is defamatory, obscene, unlawful, threatening, harassing, or otherwise objectionable; and (iv) your User Content complies with all applicable laws, rules, and regulations.</p>
<p><strong>Feedback</strong>. If you provide Playkami with any ideas, suggestions, concepts, proposals, improvements, recommendations, feedback, or other input regarding the Service or Playkami&#x27;s products, services, or business operations (collectively, &quot;Feedback&quot;), you acknowledge and agree that: (i) such submission is voluntary and made at your own risk, and Playkami has no obligation, express or implied, to treat such Feedback as confidential or proprietary; (ii) Playkami may have already developed or received similar ideas, suggestions, or proposals from other sources; (iii) you irrevocably assign to Playkami all right, title, and interest in and to such Feedback, including all intellectual property rights therein, and Playkami may use, reproduce, modify, distribute, publicly display, publicly perform, prepare derivative works of, incorporate into other works, and otherwise freely exploit such Feedback for any purpose whatsoever, commercial or otherwise, without restriction, attribution, compensation, or notice to you; (iv) to the extent any such assignment is not permitted or effective under applicable law, you hereby grant Playkami a perpetual, irrevocable, non-exclusive, royalty-free, fully paid-up, worldwide, sublicensable, and transferable license to use, reproduce, modify, distribute, publicly display, publicly perform, prepare derivative works of, incorporate into other works, and otherwise exploit such Feedback for any purpose; and (v) you waive any moral rights or equivalent rights you may have in such Feedback. You represent and warrant that you have all rights necessary to submit such Feedback and to grant the foregoing rights to Playkami.</p>
<p><strong>No Obligation to Monitor</strong>. Playkami has no obligation to monitor, review, or edit User Content, but reserves the right to do so at any time in its sole discretion. We may, but are not obligated to, remove or disable access to any User Content that we determine, in our sole discretion, violates this Agreement, infringes any intellectual property or other rights, or is otherwise objectionable.</p>
<p><strong>Retention</strong>. Following termination or deactivation of your account, or if you remove any User Content from the Service, Playkami may retain your User Content for a reasonable period of time for backup, archival, audit, or legal purposes. Furthermore, copies of your User Content may remain viewable in cached or archived pages, or may have been copied or stored by other users.</p>
<p><strong>Disclaimer</strong>. Playkami does not endorse any User Content or any opinion, recommendation, or advice expressed therein. Playkami expressly disclaims any and all liability in connection with User Content. You understand that by using the Service, you may be exposed to User Content that is inaccurate, offensive, indecent, or objectionable, and you agree to waive any legal or equitable rights or remedies you may have against [Company Name] with respect thereto.</p>
  </section>

  <section>
<h2><span>18</span> Third-Party Service; Third-Party Terms</h2>
<p>The Service may contain links to third-party properties, services, and applications (&quot;<strong>Third-Party Service</strong>&quot;). When you click on such links, you are subject to those parties&#x27; terms and policies. Third-Party Services are not under Playkami&#x27;s control. Playkami is not responsible for any Third-Party Service and provides links only as a convenience, without review, approval, endorsement, or warranty. You use Third-Party Service links at your own risk. When you leave our Service, our terms and policies no longer govern. Review all applicable agreements before proceeding with any third-party transaction.</p>
  </section>

  <section>
<h2><span>19</span> Prohibited Activities</h2>
<p>You agree to abide by this Agreement and will not (and will not attempt to):</p>
<ol>
<li>Provide false or misleading information to Playkami;</li>
<li>Use or attempt to use another User&#x27;s Wallet without authorization;</li>
<li>Create, list, or make available counterfeit Playkami NFTs;</li>
<li>Impersonate another person or entity;</li>
<li>Use the Service in any manner that could interfere with, disrupt, or negatively affect other Users or damage, disable, overburden, or impair the Service;</li>
<li>Develop, utilize, or disseminate software or interact with any API in any manner that could harm the Service;</li>
<li>Reverse engineer any aspect of the Service or attempt to discover source code or bypass access limitations;</li>
<li>Attempt to circumvent content-filtering techniques or access unauthorized features or areas;</li>
<li>Use unauthorized robots, spiders, scrapers, browser extensions, or other automated means to access the Service or extract data;</li>
<li>Collect or harvest data for contacting individuals, companies, or entities, or use such data for direct marketing (including email, SMS, telemarketing, or direct marketing);</li>
<li>Bypass or ignore automated access instructions;</li>
<li>Use the Service for illegal or unauthorized purposes, or engage in activity violating applicable law or this Agreement;</li>
<li>Use the applicable blockchain for illegal activities, including money laundering, terrorist financing, or activities adversely affecting blockchain or Service performance;</li>
<li>Engage in or facilitate &quot;front-running,&quot; &quot;wash trading,&quot; &quot;pump and dump trading,&quot; &quot;ramping,&quot; &quot;cornering,&quot; or other fraudulent, deceptive, or manipulative trading activities, including: trading at successively manipulated prices to create false activity appearances; executing transactions with no material ownership change or entering orders knowing substantially similar orders have been or will be entered by the same or different parties; or participating in pools, syndicates, or accounts organized to unfairly influence market prices;</li>
<li>Use the Service for financial activities subject to registration or licensing, including securities, debt, or equity financings;</li>
<li>Use the Service to participate in business, protocol, or platform fundraising, including creating, listing, or buying assets redeemable for financial instruments, giving ICO or securities offering participation rights, or entitling owners to financial rewards such as DeFi yield bonuses, staking bonuses, or burn discounts.</li>
</ol>
  </section>

  <section>
<h2><span>20</span> Copyright</h2>
<p>Playkami retains the absolute right to terminate access and remove User Content for any User who violates or infringes our rights or third-party rights. If you believe that any content on the Service infringes your copyright, you may submit a notification pursuant to the Digital Millennium Copyright Act by providing [Company Name]&#x27;s designated copyright agent with the information required under 17 U.S.C. § 512(c)(3). Our designated copyright agent for notice of alleged infringement is:
Email: <a href="https://playkami.io">legal@playkami.io</a>
Subject Line: Copyright Agent</p>
  </section>

  <section>
<h2><span>21</span> Investigations</h2>
<p>If Playkami becomes aware of possible Agreement violations, we reserve the right (but have no obligation) to investigate. If we believe criminal activity may have occurred, we reserve the right to refer the matter to and cooperate with applicable legal authorities. Except as prohibited by law, we may disclose any information or materials in our possession in connection with your use of the Service: (i) to comply with applicable laws, legal process, or governmental requests; (ii) to enforce this Agreement; (iii) to respond to third-party claims that User Content violates their rights; (iv) to respond to customer service requests; or (v) to protect the rights, property, or safety of Playkami, its Users, or the public. By agreeing to this Agreement, you irrevocably consent to the foregoing. You acknowledge that you have no expectation of privacy concerning your use of the Service, including text, voice, or video communications.</p>
  </section>

  <section>
<h2><span>22</span> Release</h2>
<p>You hereby release and forever discharge Playkami and our officers, employees, agents, successors, and assigns (the &quot;<strong>Playkami Entities</strong>&quot;) from, and waive and relinquish, each past, present, and future dispute, claim, controversy, demand, right, obligation, liability, action, and cause of action of every kind (including personal injuries, death, and property damage) that has arisen or arises directly or indirectly out of, or relates to, the Service (including interactions with other Users or Third-Party Service).</p>
<p><strong>YOU HEREBY WAIVE CALIFORNIA CIVIL CODE SECTION 1542, OR ANY SIMILAR LAW OR RULE OF ANY OTHER JURISDICTION, WHICH STATES: &quot;A GENERAL RELEASE DOES NOT EXTEND TO CLAIMS THAT THE CREDITOR OR RELEASING PARTY DOES NOT KNOW OR SUSPECT TO EXIST IN HIS OR HER FAVOR AT THE TIME OF EXECUTING THE RELEASE AND THAT, IF KNOWN BY HIM OR HER, WOULD HAVE MATERIALLY AFFECTED HIS OR HER SETTLEMENT WITH THE DEBTOR OR RELEASED PARTY.&quot;</strong></p>
  </section>

  <section>
<h2><span>23</span> Assumption of Risk Related to Playkami NFTs</h2>
<p>You acknowledge and agree that:</p>
<ol>
<li>You are solely responsible for determining applicable taxes on your Playkami NFT transactions. Neither Playkami nor any Playkami Entity is responsible for determining such taxes.</li>
<li>Playkami NFTs exist and can be transferred only by virtue of ownership records maintained on the blockchain.</li>
<li>There are risks associated with digital currency and assets, including hardware, software, and internet connection risks, malicious software risks, and risks of unauthorized third-party access.</li>
<li>The legal and regulatory regime governing blockchain technologies, cryptocurrencies, and NFTs is evolving, and new regulations may materially adversely affect them.</li>
<li>There are risks associated with purchasing user-generated content, including purchasing counterfeit, mislabeled, or vulnerable assets, assets on buggy smart contracts, and assets that may become untransferable.</li>
<li>Playkami reserves the right to hide collections, contracts, and assets suspected of violating this Agreement. Your Playkami NFTs may become inaccessible on the Service. Under no circumstances shall inability to access or view your assets serve as grounds for a claim against Playkami.</li>
<li>Playkami has no responsibility for any Playkami NFT after the initial offering or sale. We do not investigate and cannot guarantee or warrant the authenticity, originality, uniqueness, marketability, legality, or value of any Playkami NFT.</li>
</ol>
  </section>

  <section>
<h2><span>24</span> Tax Compliance and Prohibited Transactions</h2>
<p>You are strictly prohibited from engaging in any form of tax avoidance or evasion on our marketplace. This includes creating multiple accounts to artificially lower taxable values by transferring goods between accounts at unreasonably low prices before requesting shipment. Any attempt to manipulate transactions to reduce tax obligations violates this Agreement and may result in account suspension, termination, and potential legal action. We reserve the right to investigate and report suspicious activity to appropriate tax authorities.</p>
  </section>

  <section>
<h2><span>25</span> Disclaimers</h2>
<p><strong>THE SERVICE, CONTENT, AND PLAYKAMI NFTS ARE PROVIDED ON AN &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; BASIS WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED. PLAYKAMI (AND ITS SUPPLIERS) MAKE NO WARRANTY THAT THE SERVICE: (A) WILL MEET YOUR REQUIREMENTS; (B) WILL BE AVAILABLE ON AN UNINTERRUPTED, TIMELY, SECURE, OR ERROR-FREE BASIS; OR (C) WILL BE ACCURATE, RELIABLE, COMPLETE, LEGAL, OR SAFE. PLAYKAMI DISCLAIMS ALL OTHER WARRANTIES, INCLUDING IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT.</strong></p>
<p><strong>WHILE PLAYKAMI ATTEMPTS TO MAKE YOUR ACCESS TO AND USE OF THE SERVICE SAFE, WE CANNOT AND DO NOT REPRESENT OR WARRANT THAT THE SERVICE, CONTENT, OR PLAYKAMI NFTS ARE FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS. WE CANNOT GUARANTEE THE SECURITY OF ANY DATA YOU DISCLOSE ONLINE. YOU ACCEPT THE INHERENT SECURITY RISKS OF PROVIDING INFORMATION AND TRANSACTING ONLINE AND AGREE NOT TO HOLD US RESPONSIBLE FOR ANY BREACH OF SECURITY UNLESS DUE TO OUR GROSS NEGLIGENCE.</strong></p>
<p><strong>PLAYKAMI NFTS ARE INTANGIBLE DIGITAL ASSETS THAT EXIST ONLY BY VIRTUE OF OWNERSHIP RECORDS MAINTAINED ON THE BLOCKCHAIN. ANY TRANSFER OF TITLE OCCURS ON THE DECENTRALIZED LEDGER WITHIN THE BLOCKCHAIN PLATFORM. WE DO NOT GUARANTEE THAT PLAYKAMI CAN EFFECT THE TRANSFER OF TITLE OR RIGHT IN ANY PLAYKAMI NFT, NOR THAT ANY PLAYKAMI NFT WILL HAVE OR RETAIN ANY VALUE OR THAT YOU WILL BE ABLE TO SELL OR RESELL ANY PLAYKAMI NFT. PLAYKAMI IS NOT RESPONSIBLE FOR ANY LOSSES DUE TO VULNERABILITIES OR FAILURES OF SOFTWARE (INCLUDING SMART CONTRACTS), BLOCKCHAINS, OR FEATURES INHERENT TO PLAYKAMI NFTS, INCLUDING FORKS, TECHNICAL NODE ISSUES, OR OTHER BLOCKCHAIN-RELATED ISSUES.</strong></p>
<p><strong>EXCEPT WHERE PLAYKAMI IS THE BUYER OR SELLER, PLAYKAMI IS NOT INVOLVED IN THE ACTUAL TRANSACTION BETWEEN BUYERS AND SELLERS AND IS NOT LIABLE FOR THIRD-PARTY CONDUCT, INCLUDING CONDUCT OF ASSET OR NFT SELLERS, THIRD-PARTY OFFERORS, OR OTHER USERS. THE RISK OF INJURY FROM SUCH THIRD PARTIES RESTS ENTIRELY WITH YOU. WHILE WE MAY HELP FACILITATE DISPUTE RESOLUTION, WE HAVE NO CONTROL OVER AND DO NOT GUARANTEE THE QUALITY, SAFETY, OR LEGALITY OF ASSETS, THE TRUTH OR ACCURACY OF LISTINGS, THE ABILITY OF BUYERS OR SELLERS TO COMPLETE TRANSACTIONS, OR THE STATEMENTS OF USERS OR THIRD-PARTY SELLERS.</strong></p>
<p><strong>Nothing in this Agreement excludes or limits liability for fraud, death or bodily injury caused by negligence, or any other liability that cannot be limited or excluded under applicable law. SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OF IMPLIED WARRANTIES, SO SOME OF THE ABOVE EXCLUSIONS MAY NOT APPLY TO YOU</strong>.</p>
<p>We do not transfer legal ownership of Assets from Seller to Buyer. California Commercial Code § 2401(2) and Uniform Commercial Code § 2-401(2) apply to ownership transfer unless otherwise agreed. We cannot guarantee continuous or secure Service access as operation may be interfered with by factors outside our control.</p>
  </section>

  <section>
<h2><span>26</span> Limitation of Liability</h2>
<p><strong>TO THE FULLEST EXTENT PERMITTED BY LAW, PLAYKAMI WILL NOT BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY LOST PROFIT OR ANY INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE DAMAGES ARISING FROM THIS AGREEMENT, THE SERVICE, OR ANY PLAYKAMI NFTS, OR FOR DAMAGES RELATED TO LOSS OF REVENUE, PROFITS, BUSINESS, ANTICIPATED SAVINGS, USE, GOODWILL, OR DATA, WHETHER CAUSED BY TORT (INCLUDING NEGLIGENCE), BREACH OF CONTRACT, OR OTHERWISE, EVEN IF FORESEEABLE AND EVEN IF PLAYKAMI HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.</strong></p>
<p><strong>WITHOUT LIMITING THE FOREGOING, PLAYKAMI WILL NOT BE LIABLE FOR ANY LOSS ARISING FROM ANY ACTION TAKEN IN RELIANCE ON SERVICE MATERIAL OR INFORMATION, INCLUDING ANY RECOMMENDATION, OR FOR ANY PURCHASE OR USE OF PLAYKAMI NFTS, INCLUDING LOSSES, DAMAGES, OR CLAIMS ARISING FROM: (I) USER ERROR SUCH AS FORGOTTEN PASSWORDS, INCORRECTLY CONSTRUCTED TRANSACTIONS, OR MISTYPED ADDRESSES; (II) SERVER FAILURE OR DATA LOSS; (III) CORRUPTED WALLET FILES; (IV) UNAUTHORIZED ACCESS TO APPLICATIONS; OR (V) UNAUTHORIZED THIRD-PARTY ACTIVITIES, INCLUDING VIRUSES, PHISHING, BRUTEFORCING, OR OTHER ATTACKS.</strong></p>
<p><strong>ACCESS TO AND USE OF THE SERVICE IS AT YOUR OWN DISCRETION AND RISK, AND YOU ARE SOLELY RESPONSIBLE FOR ANY DAMAGE TO YOUR COMPUTER SYSTEM OR MOBILE DEVICE OR LOSS OF DATA RESULTING THEREFROM.</strong></p>
<p><strong>NOTWITHSTANDING ANYTHING TO THE CONTRARY HEREIN, IN NO EVENT SHALL PLAYKAMI&#x27;S MAXIMUM AGGREGATE LIABILITY ARISING OUT OF OR RELATED TO THIS AGREEMENT, YOUR USE OF THE SERVICE, CONTENT, ASSET MANAGEMENT SERVICES, OR ANY PLAYKAMI NFTS EXCEED THE GREATER OF: (A) $100; OR (B) THE AMOUNT RETAINED BY PLAYKAMI IN THE TRANSACTION OR INCIDENT THAT IS THE SUBJECT OF THE CLAIM.</strong></p>
<p><strong>Some jurisdictions do not allow the exclusion or limitation of incidental or consequential damages, so the above limitation or exclusion may not apply to you.</strong></p>
  </section>

  <section>
<h2><span>27</span> Dispute Resolution</h2>
<p><strong>Agreement to Arbitrate</strong>. You and Playkami agree that any dispute, claim, or controversy arising out of or relating to this Agreement, the Service, or your relationship with Playkami (collectively, &quot;<strong>Disputes</strong>&quot;) will be resolved exclusively through final and binding arbitration, rather than in court, except that: (a) either party may assert claims in small claims court if the claims qualify; and (b) either party may seek injunctive or other equitable relief in a court of competent jurisdiction to prevent the actual or threatened infringement, misappropriation, or violation of intellectual property rights. This agreement to arbitrate is intended to be broadly interpreted and applies to all Disputes, whether based in contract, tort, statute, fraud, misrepresentation, or any other legal theory, and whether arising before or after the termination of this Agreement.</p>
<p><strong>Arbitration Rules and Procedures</strong>. The arbitration will be administered by JAMS pursuant to its Comprehensive Arbitration Rules and Procedures, or, for claims under $250,000, the Streamlined Arbitration Rules and Procedures, available at www.jamsadr.com. The Federal Arbitration Act, 9 U.S.C. §§ 1-16, governs the interpretation and enforcement of this dispute resolution provision. To initiate arbitration, you must send a written demand for arbitration to Playkami at [legal@playkami.io], describing the nature of your claim and the relief sought. Playkami will send any demand for arbitration to the email address associated with your account. The arbitration will be conducted in the English language and will take place in [Delaware], unless you and Playkami agree otherwise or the arbitrator determines that such location would impose an undue burden on you, in which case the arbitration may be conducted by telephone, videoconference, or based on written submissions as determined by the arbitrator.</p>
<p><strong>Arbitration Fees and Costs</strong>. Payment of all filing, administration, and arbitrator fees will be governed by JAMS rules. If you demonstrate that such fees would be prohibitively burdensome compared to litigation, Playkami will pay as much of the filing, administration, and arbitrator fees as the arbitrator deems necessary to prevent the arbitration from being prohibitively burdensome. Each party shall bear its own attorneys&#x27; fees and costs unless the arbitrator determines that a claim or defense was frivolous or brought for an improper purpose, in which case the arbitrator may award reasonable attorneys&#x27; fees and costs to the prevailing party.</p>
<p><strong>Authority of Arbitrator</strong>. The arbitrator shall have exclusive authority to resolve all Disputes, including any claim that all or any part of this dispute resolution provision is void or voidable. The arbitrator shall have the authority to grant any remedy that would otherwise be available in court, provided that the arbitrator may not award relief that exceeds what this Agreement permits. The arbitrator&#x27;s decision shall be final and binding and may be entered as a judgment in any court of competent jurisdiction.</p>
<p><strong>Waiver of Jury Trial</strong>. YOU AND PLAYKAMI HEREBY WAIVE ANY CONSTITUTIONAL AND STATUTORY RIGHTS TO SUE IN COURT AND TO HAVE A TRIAL IN FRONT OF A JUDGE OR A JURY. You and Playkami are instead electing to resolve all Disputes through arbitration as set forth herein. In the event that any Dispute is determined to be non-arbitrable, you and Playkami agree to waive any right to a jury trial with respect to such Dispute.</p>
<p><strong>Waiver of Class and Collective Relief</strong>. ALL DISPUTES MUST BE BROUGHT IN THE PARTIES&#x27; INDIVIDUAL CAPACITY AND NOT AS A PLAINTIFF OR CLASS MEMBER IN ANY PURPORTED CLASS, COLLECTIVE, OR REPRESENTATIVE PROCEEDING. YOU AND [COMPANY NAME] EXPRESSLY WAIVE ANY RIGHT TO FILE OR PARTICIPATE IN A CLASS ACTION OR SEEK RELIEF ON A CLASS OR COLLECTIVE BASIS. The arbitrator may not consolidate more than one person&#x27;s claims and may not preside over any form of class, collective, or representative proceeding. If this waiver of class or collective relief is found to be unenforceable as to a particular Dispute, then that Dispute shall be severed and proceed in a court of competent jurisdiction, while all remaining Disputes shall proceed in arbitration on an individual basis.</p>
<p><strong>30-Day Right to Opt Out</strong>. You have the right to opt out of this agreement to arbitrate by sending written notice of your decision to opt out to support@playkami.io within thirty (30) days of first accepting this Agreement. Your notice must include your name, mailing address, account username (if applicable), and a clear statement that you wish to opt out of this arbitration provision. If you opt out, neither you nor Playkami will be required to arbitrate Disputes, and all other provisions of this Agreement will remain in effect. If you do not opt out within the 30-day period, you will be deemed to have agreed to this arbitration provision. Opting out of this arbitration provision does not affect any other arbitration agreements you may have entered into with Playkami.</p>
<p><strong>Survival</strong>. This dispute resolution provision shall survive termination of this Agreement and your use of the Service.</p>
<p><strong>Modifications</strong>. If Playkami makes any material changes to this dispute resolution provision, such changes will not apply to any Dispute for which you provided written notice to Playkami prior to the date of the change.</p>
  </section>

  <section>
<h2><span>28</span> General</h2>
<p>The Service may be subject to U.S. export control laws and export or import regulations in other countries. You agree not to use, export, reexport, or transfer U.S. technical data acquired from Playkami, or products utilizing such data, in violation of U.S. export laws or regulations. You may not use, export, import, or transfer the Service except as authorized by U.S. law, the laws of the jurisdiction where you obtained the Service, and any other applicable laws. You acknowledge that products, services, or technology provided by Playkami are subject to U.S. export control laws and regulations. You shall comply with these laws and shall not, without prior U.S. government authorization, export, re-export, or transfer Playkami products, services, or technology to any country in violation of such laws.
This Agreement and your access to and use of the Service shall be governed by and construed in accordance with the laws of the State of California, without regard to conflict of law principles. Any dispute not subject to arbitration or small claims court shall be resolved in state or federal courts of San Francisco, California.
If you are a California resident, you may report complaints to the Complaint Assistance Unit of the Division of Consumer Product of the California Department of Consumer Affairs at 1625 North Market Blvd, Suite N 112, Sacramento, CA 95834, or by telephone at (800) 952-5210.
We reserve the right in our sole discretion to: (i) modify, suspend, or discontinue the Service, or any features or parts thereof, temporarily or permanently, with or without notice; and (ii) terminate your right to access or use the Service at any time for any or no reason. We shall have no liability or obligation to you in connection with any such event, and you will not be entitled to a refund of any amounts already paid, to the fullest extent permitted by law.
If any term, clause, or provision of this Agreement is held invalid or unenforceable, that portion will be severable and will not affect the validity or enforceability of any remaining portion. This Agreement may not be transferred or assigned by you without our prior written consent. Our failure to assert any right or provision shall not constitute a waiver. Except as otherwise provided herein, this Agreement is intended solely for the benefit of Playkami and you and shall not confer third-party beneficiary rights.</p>
  </section>

  <section>
<h2><span>29</span> Giveaways and Sweepstakes</h2>
<p><strong>Overview</strong>. From time to time, Playkami may offer promotional giveaways, sweepstakes, contests, or similar incentive programs (&quot;Promotions&quot;). These Promotions are subject to this section, this Agreement, and any additional Official Rules provided for each Promotion. In any conflict, the Official Rules govern over this section, and this section governs over the remaining Terms.</p>
<p><strong>Eligibility</strong>. Participation is void where prohibited by law. You must meet all requirements in the Official Rules, including age, residency, and account status criteria. Certain Promotions may require a registered Playkami account in good standing.</p>
<p><strong>No Purchase Necessary</strong>. Unless otherwise stated, no purchase or payment is required to enter or win. As an Alternate Method of Entry (&quot;AMOE&quot;), eligible users may enter by: creating a Playkami account (if not already having one); logging in daily to claim points as specified in the Official Rules; and clicking the designated entry link on the Promotion page without purchase or payment. Entry link: https://playkami.io/promotions. Specific details are outlined in the Official Rules. All AMOE entries must be received during the Promotion Period.</p>
<p><strong>Odds and Prizes</strong>. Odds of winning depend on eligible entries received. Prizes, approximate retail values, and relevant restrictions are described in the Official Rules. Any applicable taxes, fees, or expenses not specifically included in the prize are the winner&#x27;s sole responsibility.</p>
<p><strong>Winner Selection and Notification</strong>. Winners will be selected at random (or by criteria set forth in the Official Rules) from eligible entries. Winners will be notified using their Playkami account contact information. You are responsible for ensuring your contact information is accurate and current.</p>
<p><strong>Compliance and Disqualification</strong>. We reserve the right to disqualify any participant who tampers with the entry process, circumvents rules, violates this Agreement, or engages in fraudulent or unethical behavior. We may cancel, suspend, or modify any Promotion due to force majeure or factors beyond our reasonable control, as permitted by law.</p>
<p><strong>Limitation of Liability</strong>. By participating, you acknowledge that Playkami, its affiliates, subsidiaries, partners, and their officers, directors, employees, and agents will not be liable for any claims, losses, or damages arising from participation, including technical failures, unauthorized tampering, or non-delivery of communications.</p>
<p><strong>Governing Law and Venue</strong>. Unless otherwise specified, Promotions are governed by the laws specified in this Agreement without regard to conflict of law principles, and disputes shall be handled per the dispute resolution provisions herein.</p>
<p>By using the Service or participating in any Promotion, you agree to be bound by this section, this Agreement, and all applicable Official Rules.</p>
  </section>

  <section>
<h2><span>30</span> Contact Information</h2>
<p>Email: <a href="mailto://contact@playkami.io">contact@playkami.io</a></p>
<p>Legal: <a href="mailto://legal@playkami.io">legal@playkami.io</a></p>
<p>Address: 8 The Green, Suite R, Dover, DE 19901, United States</p>
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
