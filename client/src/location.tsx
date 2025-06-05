export default function Address() {
  return (
    <div className="address-container">
      <h2>Where We Plan To Party?</h2>

      <div className="address-details">

        <div className="time">
          <p className="left">Date:</p>
          <p className="right">Saturday November 1st 2025</p>
        </div>
        
        <div className="time">
          <p className="left">Time:</p>
          <p className="right">6pm - 11.30pm</p>
        </div>

        <div className="address">
          <p className="left">Where:</p>
          <ul className="right">
            <li>Learie Constantine Centre </li>
            <li>Villiers Road (nearest tube station - Dollis Hill)</li>
            <li> NW2 2FD</li>
          </ul>
        </div>

        <div className="parking">
          <p className="left">Parking:&nbsp;</p>
          <p className="right">An abundance of free parking bays are available on the main road and surrounding 
            roads all day
          </p>
        </div>

        <div className="dress-code">
          <p className="left">Dress Code:</p>
          <p className="right">Glam up in your best party attire and come looking Instagram ready!
          </p>
        </div>

        <div className="itenary">
          <p className="left">Itinerary:</p>
          <p className="right">
            <ul>
              <li>6pm - 6.30pm: &nbsp; Arrival of guests</li>
              <li>6.45pm - 7pm: &nbsp; Opening prayer and introductions</li>
              <li>7.15pm - 8pm: &nbsp; Family presentation and MC takeover</li>
              <li>8.15pm - 9.15pm: &nbsp; Delicious dinner and cutting of birthday cake</li>
              <li>9.30pm - 11.30pm: &nbsp; Dance floor opens. Let's shake a leg or two to some good grooves</li>
            </ul>
          </p>
        </div>

        <div className="details">
            <p className="left">Details:</p>
          <p className="right">
            Please arrive on time so you don't miss out on the good parts
            of the evening. This is an <b>adult only event</b> so we politely ask that  
            only those directly invited attend. We can of course accommodate adult 
            family members who are accompanying elderly guests.
          </p>
        </div>
     
      </div>
    </div>
  );
}
