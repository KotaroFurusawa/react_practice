import CounterResult from "./CounterResult"
import CounterButton from "./CounterButton"

const Counter = ({ state }) => {
    return (
        <>
            <CounterResult state={state} />
            <CounterButton step={2} calcType="+"/>
            <CounterButton step={2} calcType="-"/>
            <CounterButton step={10} calcType="+"/>
            <CounterButton step={10} calcType="-"/>
        </>
    )
}
export default Counter;