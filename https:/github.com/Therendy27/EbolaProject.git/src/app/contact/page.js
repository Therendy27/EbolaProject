export default function ContactPage() {
    return (
      <div className="min-h-screen p-20 bg-gray-100">
        <h1 className="text-4xl font-bold text-blue-600 mb-6 text-center">Contact Us</h1>
        <section className="bg-white p-6 rounded-lg shadow-lg p-10  max-w-lg mx-auto">
          <h2 className="text-2xl font-semibold mb-4 text-black">Get in Touch</h2>
          <p className="text-lg text-gray-700 mb-6 ">
            If you have questions, need further information, or want to stay updated, please feel free to reach out to us. We are here to provide you with the support you need.
          </p>
          <form className="grid gap-6">
            <div>
              <label htmlFor="name" className="block text-lg font-medium text-gray-800 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-lg font-medium text-gray-800 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-lg font-medium text-gray-800 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full p-3 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              Send Message
            </button>
          </form>
        </section>
      </div>
    );
  }
  