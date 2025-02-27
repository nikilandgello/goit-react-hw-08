import clsx from 'clsx';
import css from './HomePage.module.css';

const HomePage = () => {
  return (
    <div className={clsx('container', 'background')}>
      <h1>Welcome to Your Phonebook</h1>
      <p>
        Easily manage your contacts and keep all your phone numbers in one
        place.
      </p>
      <button>Get Started</button>

      <section id="features">
        <h2>Main Features</h2>
        <ul>
          <li>
            <strong>Add Contacts:</strong> Add names, phone numbers, and emails.
          </li>
          <li>
            <strong>Search Contacts:</strong> Quickly find contacts by name,
            number, or email.
          </li>
          <li>
            <strong>Organize & Edit:</strong> Update or remove contacts anytime.
          </li>
          <li>
            <strong>Secure & Accessible:</strong> Safe storage and accessibility
            from any device.
          </li>
        </ul>
      </section>

      <section id="how-it-works">
        <h2>How It Works</h2>
        <ol>
          <li>Create an account or log in.</li>
          <li>Click `Add New Contact` to enter a new phone number.</li>
          <li>Search for contacts using the search bar.</li>
          <li>Access your contacts anytime, anywhere.</li>
        </ol>
      </section>

      <section id="testimonials">
        <h2>What Our Users Say</h2>
        <blockquote>
          `This phonebook is a lifesaver! I can always find my contacts fast.` -
          Alex
        </blockquote>
        <blockquote>
          `I love how easy it is to add and organize my contacts!` - John
        </blockquote>
      </section>
    </div>
  );
};

export default HomePage;
