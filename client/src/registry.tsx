function Registry({registryref}: {registryref: React.RefObject<HTMLElement|null>}){

    return (
<section ref={registryref} className="registry">
    <h2>your presence is a gift</h2>
    <p>Having amazing family and friends to celebrate with is the best gift of all. 
        However, if you wish to honour our mother with a gift then vouchers 
        from the following stores would put a huge smile on her face:</p>

        <ul>
            <li>Westfield</li>
            <li>Boots</li>
            <li>Holland & Barrett</li>
            <li>John Lewis</li>
            <li>Marks & Spencers</li>
        </ul>
</section>
    )
}

export default Registry