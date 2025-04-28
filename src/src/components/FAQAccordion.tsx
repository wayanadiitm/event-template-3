import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

export default function FAQAccordion() {
  const faqs = [
    {
      question: "What's the eligibility to participate?",
      answer:
        "This is a PAN BS event. All students (regular & diploma-only) enrolled (i.e. having the student mail id) in the IITM Data Science or Electronic Systems (irrespective of the level) programme are welcome to register for our event.",
    },
    {
      question: "I am a Foundation level student. Should I take part in this contest?",
      answer:
        "Definitely. We highly encourage you to register for our event. One of our objectives is inclusivity. The questions will be designed in a way that cater to various levels of students of varying skill levels or coming from non-coding backgrounds, ensuring accessibility to beginners as well. The beauty of LogicLoom 4.0 lies in its accessibility. You don't need prior knowledge of AI and ML to participate. The difficulty level will be tailored to the topics covered in FL courses, ensuring that every participant feels comfortable yet challenged. The key to success lies in your ability to think outside the box and approach problems with creativity and logic. So, don't hesitate - seize the opportunity and go for it!",
    },
    {
      question: "Can I attend workshops online?",
      answer:
        "Absolutely yes. LogicLoom 4.0 will be conducted online & offline both. However, registrations for LogicLoom 4.0 is mandatory for attending the Speakers' talk sessions",
    },
    {
      question: "I'm unable to access Registration form. What to do?",
      answer:
        "Registration will only be possible online via IITM Paradox portal. Please try signing using the IITM student account only. If you are facing issues in registering for our event on the Paradox website, please communicate with the Paradox team directly at logicloom@iitmparadox.org with a CC to us.",
    },
    {
      question: "I can't login to the LogicLoom participant app portal.",
      answer:
        "To access the participants portal and attempt the online rounds, visit https://logicloom.iitmparadox.org. a seamless login system is now enabled through direct Google OAuth integration. You don't need to remember any creds. Simply sign in using the Google account you used to register for our event on the IITM Paradox portal. If you attempt to log in with a different account, you'll receive an error message and won't be eligible to access the portal. Please write to logicloom@ds.study.iitm.ac.in for any queries.",
    },
    {
      question:
        "Due to some issues in my internet connectivity I couldn't submit the prelims. Will it be fine?",
      answer:
        "Absolutely, there's nothing to worry about. The responses marked and saved before the glitch occured, will be evaluated by the auto-grader once the due time passes for your profile. It will be considered as a proper submission, provided all the integrity checks pass once processed by the system (Once the exam ends, all activity logs from the portal will be processed via our system. The entire process is automated. Any cases of discrepancies, mismatch, UFM will be tracked by our tool and will result in the failed checks, followed by the cancellation of your attempt)  Also, for any loading issues on the question screen (due to server load etc.), don't logout. Just press the refresh icon on the question screen.",
    },
    {
      question: "Can I attempt the Prelims Rounds in any of the slots?",
      answer:
        "No. Once you start the exam, you have to complete it within the slot in the specified time limit. The maximum number of attempts will be set to 1. Moreover, we have provided a flexible window of 35 hours (Refer to the Schedule) and you can attempt the round for any 20 minutes in this time-frame. Decide your convenient slot wisely. Please check the 'Schedule' section on the website.",
    },
    {
      question: "I have some other questions that haven't been discussed here.",
      answer:
        "We suggest you read the event rule book [website link], as everything has been explained there in detail. Still, if you have any general queries, feel free to contact the organizers via mail at  logicloom@ds.study.iitm.ac.in. We will try to reply back within one working day.",
    },
  ];

  return (
    <div className="w-full py-16 grid place-items-center">
      <div id="faq" className="w-3xl">
        <h2 className="text-2xl font-bold text-center mb-8">Frequently Asked Questions (FAQs)</h2>
        <Accordion type="single" collapsible>
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>
                <div className="whitespace-pre-line">{faq.answer}</div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
