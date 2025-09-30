const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-6 px-4 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-900">
      <div className="max-w-4xl mx-auto text-center text-sm text-gray-600 dark:text-gray-400">
        <p className="mb-2">
          © {currentYear} Ziba Nouri. All rights reserved.
        </p>
        <p className="mb-2">
          For inquiries, please contact me at{' '}
          <a
            href="mailto:zn.zibanouri@gmail.com"
            className="font-medium text-slate-800 hover:underline dark:text-slate-200"
          >
            zn.zibanouri@gmail.com
          </a>
        </p>
        <p>
          Built with care and curiosity.
        </p>
      </div>
    </footer>
  );
};

export default Footer;