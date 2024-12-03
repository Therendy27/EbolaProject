export default function PreventionPage() {
    return (
      <div className="min-h-screen p-8 bg-gray-100 p-20">
        <h1 className="text-4xl font-bold text-blue-600 mb-6">Prevention</h1>
        <section className="bg-white p-6 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-black">How to Prevent Ebola</h2>
          <p className="text-lg text-gray-700 mb-4">
            Prevention is key when it comes to stopping the spread of Ebola. Follow these guidelines to reduce the risk of infection.
          </p>
          <ul className="list-disc list-inside text-lg text-gray-800">
            <li>Avoid contact with blood and body fluids of people who are sick.</li>
            <li>Avoid handling items that may have come into contact with an infected person.</li>
            <li>Wash your hands frequently with soap and water or use an alcohol-based hand sanitizer.</li>
            <li>Avoid contact with bats, monkeys, and other animals that may carry the virus.</li>
            <li>Follow infection prevention practices in healthcare settings, including wearing personal protective equipment (PPE).</li>
          </ul>
        </section>
        <section className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 text-black">Vaccination and Health Measures</h2>
          <p className="text-lg text-gray-700 mb-4">
            Vaccines are available for Ebola, and it is important to get vaccinated if you are in an area with a high risk of infection. Always follow public health guidelines and seek medical attention if you suspect exposure.
          </p>
        </section>
        <section className="flex justify-around mt-8 p-20">
        <img src="/images/washyourhands.avif" alt="Prevention Tip 1" className="w-1/5 rounded-lg shadow-md h-60" />
        <img src="/images/blood.webp" alt="Prevention Tip 2" className="w-1/5 rounded-lg shadow-md h-60" />
        <img src="/images/avoid.jpg" alt="Prevention Tip 3" className="w-1/5 rounded-lg shadow-md" />
        <img src="/images/procedures.jpeg" alt="Prevention Tip 4" className="w-1/5 rounded-lg shadow-md" />
      </section>
      </div>
    );
  }
  