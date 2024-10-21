import { Banner } from "../../components/Banner/Banner";
import { SliderElem } from "../../components/SliderElem/SliderElem";
import { Accordeon } from "../../components/Accordeon/Accordeon";

export function Home(){
    return(
        <section>
            <Banner/>
            <SliderElem/>
            <Accordeon/>
        </section>
    )
}