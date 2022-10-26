import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

const Blog = () => {
    return (
        <div>
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>What is CORS</Accordion.Header>
        <Accordion.Body>
            <p> CORS stands for Cross-Origin Resource Sharing . It allows us to relax the security applied to an API. This is done by bypassing the Access-Control-Allow-Origin headers, which specify which origins can access the API.In other words, CORS is a browser security feature that restricts cross-origin HTTP requests with other servers and specifies which domains access your resources.</p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Why are you using Firebase? What other options do you have to implement 
            authentication?
        </Accordion.Header>
        <Accordion.Body>
         <p>Firebase is a set of hosting services for any type of application (Android, iOS, Javascript, Node.js, Java, Unity, PHP, C++ ...). It offers NoSQL and real-time hosting of databases, content, social authentication (Google, Facebook, Twitter and Github), and notifications, or services, such as a real-time communication server. Firebase helps you develop high-quality apps, grow your user base, and earn more money. Each feature works independently, and they work even better together.</p>
         <br />
         <p>There are a bunch of options to implement authentication in recent times.
            such as........ <br />
            <ul className='bg-light'>
                <li>MongoDB</li>
                <li>Passport</li>
                <li>Okta</li>
                <li>Auth0</li>
                <li>JSON Web Token</li>
                <li>Amazon Cognito</li>
                <li>KeyCloak</li>
            </ul>
         </p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="0">
        <Accordion.Header>How does The PrivateRoute work?</Accordion.Header>
        <Accordion.Body>
       <p>
       Private Routes in React Router (also called Protected Routes) require a user being authorized to visit a route . So if a user is not authorized for a specific page, they cannot access it.
        <br />
        The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in). we can implement private route by wrapping certain componant to prevent unauthorized user to be logged in.
       </p>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="0">
        <Accordion.Header>What is Node? How does Node work?</Accordion.Header>
        <Accordion.Body>
        <p>Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on a JavaScript Engine and executes JavaScript code outside a web browser, which was designed to build scalable network applications. Node.js is written in C, C++, and JavaScript, and it is built on the open-source V8 JavaScript engine which also powers JS in browsers such as Google Chrome. As V8 supports new features in JavaScript, they are incorporated into Node.</p>
        <br />
        <p>It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code using event loop, it is highly scalable, lightweight, fast, and data-intensive.</p>

        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
        </div>
    );
};

export default Blog;