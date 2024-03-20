
export default function UserInput ({onChange,userInput}){
    
    return <section
         id="user-input">
    <div className="input-group">

        <p>
            <label> Initial Investment</label>
            <input type="number" required value={userInput.InitialInvestment} onChange={
                (event)=>onChange('InitialInvestment',event.target.value)}/>
        </p>
        <p>
            <label> Annual Investment</label>
            <input type="number" required value={userInput.AnnualInvestment} onChange={
                (event)=>onChange('AnnualInvestment',event.target.value)}/>
        </p>
    </div>
    <div className="input-group">

        <p>
            <label> Expected return </label>
            <input type="number" required value={userInput.ExpectedReturn} onChange={
                (event)=>onChange('ExpectedReturn',event.target.value)}/>
        </p>
        <p>
            <label> Duration </label>
            <input type="number" required value={userInput.Duration} onChange={
                (event)=>onChange('Duration',event.target.value)}/>
        </p>
    </div>
    </section>
}