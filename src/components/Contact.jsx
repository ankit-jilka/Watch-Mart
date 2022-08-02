import React from 'react'

const Contact = () => {
  return (
    <div className="conainer mb-5">
      <div className="row">
        <div className="col-12 text-center py-4 my-4">
          <h1>Have Some Questions ?</h1>
          <hr  width="93%" className='ms-5'/>
        </div>
      </div>
      <div className="row ">
        <div className="col-md-5 d-flex justify-content-center">
          <img src={process.env.PUBLIC_URL+"/imgs/contact.jpg"} width="600px" height="400px" alt="Contact Us" />
        </div>
        <div className="col-md-6">
          <form>
          <div>
          <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">Full Name</label>
              <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Ankit Jilka" />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
              <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="ankitjilka@gmail.com" />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Your Message</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows={5} placeholder="Type a message..." />
            </div>
          </div>
          <button type="submit" className="btn btn-primary">
              Send Message
          </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
