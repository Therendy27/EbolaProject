import styles from './about.module.css';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className={`min-h-screen bg-gray-100 p-20  ${styles.container}`}>
      <div className="max-w-7xl mx-auto">
        <h1 className={`text-4xl font-bold text-blue-600 mb-6  ${styles.fadeIn}`}>About Ebola</h1>
        <section className={`mb-8 ${styles.slideUp}`}>
          <h2 className="text-2xl font-semibold mb-4 text-black">What is Ebola?</h2>
          <div className={`m-10 ${styles.imageContainer}`}>
            <Image
              src="/images/ebola-virus.jpg"
              alt="Ebola Virus"
              width={300}
              height={100}
            />
          </div>
          <p className="text-lg text-gray-700">
            Ebola, also known as Ebola Virus Disease (EVD), is a rare but severe illness caused by the Ebola virus. It affects both humans and animals, causing symptoms such as fever, fatigue, and in severe cases, internal and external bleeding.
          </p>
        </section>
        <section className={`mb-8 ${styles.slideUp}`}>
          <h2 className="text-2xl font-semibold mb-4 text-black">How is Ebola Transmitted?</h2>
          <p className="text-lg text-gray-700">
            Ebola spreads through direct contact with the bodily fluids of an infected person or animal. It can also spread through contact with contaminated surfaces or materials, such as clothing or bedding that has been used by an infected person.
          </p>
        </section>
        <section className={`mb-8 ${styles.slideUp}`}>
          <h2 className="text-2xl font-semibold mb-4 text-black">Symptoms of Ebola</h2>
          <ul className="list-disc ml-6 text-lg text-gray-700">
            <li>Fever</li>
            <li>Severe headache</li>
            <li>Muscle pain and weakness</li>
            <li>Vomiting and diarrhea</li>
            <li>Unexplained bleeding or bruising</li>
          </ul>
        </section>
        <section className="flex justify-around mt-8 p-5">
        <img src="/images/fever.png" alt="Prevention Tip 1" className="w-1/5 rounded-lg shadow-md h-40 m-5" />
        <img src="/images/headache.png" alt="Prevention Tip 2" className="w-1/5 rounded-lg shadow-md h-40 m-5" />
        <img src="/images/dia.png" alt="Prevention Tip 3" className="w-1/5 rounded-lg shadow-md h-40 m-5 " />
        <img src="/images/vomit.png" alt="Prevention Tip 3" className="w-1/5 rounded-lg shadow-md h-40 m-5" />
        <img src="/images/bleed.png" alt="Prevention Tip 4" className="w-1/5 rounded-lg shadow-md h-40 m-5" />
      </section>
        <section className={`mb-8 ${styles.slideUp}`}>
          <h2 className="text-2xl font-semibold mb-4 text-black">Prevention and Treatment</h2>
          <p className="text-lg text-gray-700">
            Currently, there is no specific treatment for Ebola. However, early supportive care, such as rehydration and treatment of specific symptoms, can improve chances of survival. Vaccines are also available to help prevent outbreaks.
          </p>
        </section>
      </div>
    </div>
  );
}


