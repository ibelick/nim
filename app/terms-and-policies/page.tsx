export default function TermsAndPoliciesPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-12">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-extrabold text-zinc-900 md:text-5xl dark:text-white">
          Terms & Policies
        </h1>
        <p className="mt-2 text-lg text-zinc-600 dark:text-zinc-400">
          Understand the rules and guidelines for using this website, including
          how your data is handled and protected.
        </p>
      </header>

      <section className="rounded-lg bg-white p-6 shadow-lg dark:bg-zinc-800">
        <article className="mb-8">
          <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white">
            Terms of Use
          </h2>
          <p className="mt-2 text-zinc-600 dark:text-zinc-400">
            By accessing this website, you agree to use it responsibly and
            respect its content. All materials, including text, images, and
            code, are my intellectual property unless stated otherwise. You may
            not reproduce, distribute, or modify anything without my permission.
          </p>
          <ul className="mt-2 list-disc pl-5 text-zinc-600 dark:text-zinc-400">
            <li>Do not use this site for unlawful purposes.</li>
            <li>Respect the site’s content and avoid unauthorized copying.</li>
            <li>Contact me for permission to use any materials.</li>
          </ul>
        </article>

        <article className="mb-8">
          <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white">
            Privacy Policy
          </h2>
          <p className="mt-2 text-zinc-600 dark:text-zinc-400">
            Your privacy matters to me. I collect minimal data to improve your
            experience, such as contact form submissions or analytics (if
            applicable). I don’t share your personal information with third
            parties unless required by law.
          </p>
          <ul className="mt-2 list-disc pl-5 text-zinc-600 dark:text-zinc-400">
            <li>
              Data collected: Name, email (via contact form), and basic
              analytics (e.g., page views).
            </li>
            <li>Purpose: To respond to inquiries and understand site usage.</li>
            <li>
              Security: Reasonable measures are in place to protect your data.
            </li>
          </ul>
        </article>

        <article className="mb-8">
          <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white">
            Cookie Policy
          </h2>
          <p className="mt-2 text-zinc-600 dark:text-zinc-400">
            This site may use cookies to enhance functionality, like remembering
            your preferences or tracking usage via analytics tools. You can
            manage cookie settings through your browser.
          </p>
          <ul className="mt-2 list-disc pl-5 text-zinc-600 dark:text-zinc-400">
            <li>
              Types: Essential cookies (for site function) and analytics cookies
              (optional).
            </li>
            <li>
              Control: Adjust cookie preferences in your browser settings.
            </li>
            <li>
              Third parties: Analytics tools may set their own cookies (e.g.,
              Google Analytics).
            </li>
          </ul>
        </article>

        {/* Contact for Questions */}
        <article>
          <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white">
            Questions?
          </h2>
          <p className="mt-2 text-zinc-600 dark:text-zinc-400">
            If you have concerns about these terms or policies, feel free to{' '}
            <a
              href="/contact-me"
              className="text-blue-600 hover:underline dark:text-blue-400"
            >
              contact me
            </a>{' '}
            or email me directly at{' '}
            <a
              href="mailto:sushilsubedi151@gmail.com"
              className="text-blue-600 hover:underline dark:text-blue-400"
            >
              sushilsubedi151@gmail.com
            </a>
            . I’m here to help!
          </p>
        </article>
      </section>

      <footer className="mt-8 text-center text-sm text-zinc-500 dark:text-zinc-400">
        <p>Last updated: April 08, 2025</p>
        <p>
          Need clarification? Email me at{' '}
          <a
            href="mailto:sushilsubedi151@gmail.com"
            className="text-blue-600 hover:underline dark:text-blue-400"
          >
            sushilsubedi151@gmail.com
          </a>{' '}
          or{' '}
          <a
            href="/contact-me"
            className="text-blue-600 hover:underline dark:text-blue-400"
          >
            reach out
          </a>
          .
        </p>
      </footer>
    </main>
  )
}
