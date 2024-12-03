export default function SymptomsPage() {
    return (
      <div className="min-h-screen p-20 bg-gray-100 flex flex-col lg:flex-row lg:gap-8">
         <div className="flex-1">
        <h1 className="text-4xl font-bold text-blue-600 mb-6 text-black pt-20" >Symptoms of Ebola</h1>
        <section className="mb-8 bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 text-black">Recognizing the Symptoms</h2>
          <p className="text-lg text-gray-700 mb-4">
            Ebola Virus Disease (EVD) presents with various symptoms that often begin abruptly. It is essential to recognize these symptoms early, as prompt medical care can significantly improve the chances of survival. Here are the most common symptoms of Ebola:
          </p>
          <ul className="list-disc list-inside text-lg text-gray-800">
            <li>Fever</li>
            <li>Severe headache</li>
            <li>Muscle pain and weakness</li>
            <li>Fatigue</li>
            <li>Sore throat</li>
            <li>Vomiting and diarrhea</li>
            <li>Stomach pain</li>
            <li>Unexplained bleeding or bruising</li>
          </ul>
        </section>
        <section className="mb-8 bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 text-black">Progression of Symptoms</h2>
          <p className="text-lg text-gray-700 mb-4">
            Symptoms typically appear between 2 to 21 days after exposure to the virus, with an average onset of 8-10 days. In the early stages, Ebola may mimic the flu, which makes diagnosis challenging without laboratory tests. As the disease progresses, symptoms may worsen and include internal and external bleeding, leading to more severe health complications.
          </p>
        </section>
        <section className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 text-black">When to Seek Medical Attention</h2>
          <p className="text-lg text-gray-700">
            If you or someone you know begins showing symptoms after recent travel to an area affected by Ebola or has been in contact with an infected individual, seek medical attention immediately. Early supportive care with rehydration and treatment of symptoms can improve survival rates.
          </p>
        </section>
        </div>
        <div className="flex-1 flex items-center justify-center pb-20 lg:mt-0">
        <img
          src="/images/body.jpg"
          alt="Symptoms of Ebola"
          className="w-full max-w-md rounded-lg shadow-lg "
        />
      </div>
      </div>
      
    );
  }
  