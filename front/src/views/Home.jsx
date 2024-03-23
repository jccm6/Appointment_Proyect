import { About } from "../components/About";
import { Services } from "../components/Services";
import { Slider } from "../components/Slider";

export function Home () {
    return (
        <>
            <Slider/>
            <About/>
            <Services/>
        </>
    )
}