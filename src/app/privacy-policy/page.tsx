import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Otito.in",
  description: "Privacy Policy for Otito.in - Learn how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-8">
      <div className="prose prose-gray max-w-none">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
        
        <p className="mb-6">
          This Privacy Policy explains how otito.in ("we", "us", "our") collects, uses, stores, shares, and protects your personal information when you use our mobile application and website (collectively, "Services") in India.
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
          <p>
            Your privacy is important to us. This policy applies to all users and visitors of otito.in and explains our practices regarding your information.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
          <p className="mb-4">We may collect the following types of personal information:</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li><strong>Contact Information:</strong> Name, email address, phone number.</li>
            <li><strong>Technical Data:</strong> Device type, operating system, IP address, app usage data, cookies, and log files.</li>
            <li><strong>Location Data:</strong> General location information if you enable location access.</li>
            <li><strong>User Content:</strong> Comments, reviews, or other content you submit through our Services.</li>
            <li><strong>Other Information:</strong> Any information you voluntarily provide.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
          <p className="mb-4">We use your information for purposes such as:</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Providing and maintaining our Services.</li>
            <li>Improving user experience and customizing content.</li>
            <li>Sending important updates, newsletters, or notifications.</li>
            <li>Analyzing usage and trends to enhance our platform.</li>
            <li>Enforcing terms, preventing fraud, and ensuring security.</li>
            <li>Complying with legal obligations.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Information Sharing and Disclosure</h2>
          <p className="mb-4">We may share your information with:</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li><strong>Third-Party Service Providers:</strong> Who help us operate, analyze, or improve our Services, under strict confidentiality agreements.</li>
            <li><strong>Legal and Regulatory Authorities:</strong> As required to comply with applicable laws or to protect our rights and users.</li>
            <li><strong>Business Transfers:</strong> If otito.in is involved in a merger, acquisition, or asset sale, your information may be transferred.</li>
          </ul>
          <p className="mt-4">
            We do not sell or rent your personal information to third parties for marketing purposes.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. Use of Third-Party Services</h2>
          <p>
            We may use third-party tools and analytics providers (such as Google Analytics) to understand usage patterns. These services may collect information sent by your device as part of their service, and their use is governed by their own privacy policies.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">6. Cookies and Similar Technologies</h2>
          <p>
            We use cookies or similar technologies to enhance your experience, analyze usage, and deliver personalized content. You may set your device or browser to refuse cookies, but parts of our Services may not function properly as a result.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">7. Data Security</h2>
          <p>
            We employ reasonable security practices as mandated by Indian law. While we strive to protect your data, no method of transmission or storage is 100% secure. Please contact us immediately if you suspect unauthorized use of your account.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">8. Data Retention</h2>
          <p>
            We retain your personal information only as long as necessary to fulfill the purposes outlined in this Privacy Policy or as required by law.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">9. Your Rights and Choices</h2>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>You may access, update, or request deletion of your personal information by contacting us.</li>
            <li>Where applicable, you may withdraw consent to our processing of your data.</li>
            <li>If you have questions about how we use your information or wish to exercise your rights, please contact us.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">10. Children's Privacy</h2>
          <p>
            otito.in does not knowingly collect data from children under 13 years of age. If you believe we have collected such information, contact us and we will act promptly.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">11. Updates to this Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Changes will be notified by posting the new policy on this page. Please review this policy periodically.
          </p>
        </section>

        <section className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-600">
            Last updated: July 15, 2025
          </p>
          <p className="text-sm text-gray-600 mt-2">
            If you have any questions about this Privacy Policy, please contact us at{" "}
            <a href="mailto:privacy@otito.in" className="text-blue-600 hover:text-blue-800">
              privacy@otito.in
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}
