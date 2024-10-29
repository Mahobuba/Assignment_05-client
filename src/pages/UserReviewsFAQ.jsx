// src/components/UserReviewsFAQ.js
import React from 'react';

const reviews = [
  {
    id: 1,
    name: "John Doe",
    review: "Great product, excellent quality! Highly recommend it.",
    rating: "★★★★★",
  },
  {
    id: 2,
    name: "Jane Smith",
    review: "Good value for the price. The customer service was very helpful.",
    rating: "★★★★☆",
  },
  {
    id: 3,
    name: "Bob Johnson",
    review: "Satisfied with the purchase. Fast shipping!",
    rating: "★★★★☆",
  },
];

const faqs = [
  {
    question: "What is the return policy?",
    answer: "You can return any item within 30 days of purchase.",
  },
  {
    question: "How do I track my order?",
    answer: "Once your order is shipped, you’ll receive a tracking number via email.",
  },
  {
    question: "Do you offer international shipping?",
    answer: "Yes, we ship worldwide with some additional shipping costs.",
  },
  {
    question: "How do I track my order?",
    answer: "Once your order is shipped, you’ll receive a tracking number via email.",
  },
  {
    question: "Do you offer international shipping?",
    answer: "Yes, we ship worldwide with some additional shipping costs.",
  },
];

function UserReviewsFAQ() {
  return (
    <section className="py-8 px-4 bg-white">
      <h2 className="text-3xl font-bold text-center mb-6">Customer Reviews & FAQs</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Reviews Section */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">Customer Reviews</h3>
          {reviews.map(review => (
            <div key={review.id} className="bg-gray-100 p-4 rounded mb-4 shadow-md">
              <p className="font-semibold">{review.name}</p>
              <p>{review.rating}</p>
              <p className="text-gray-700 mt-2">{review.review}</p>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h3>
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <p className="font-semibold text-blue-600">{faq.question}</p>
              <p className="text-gray-700 mt-1">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default UserReviewsFAQ;
