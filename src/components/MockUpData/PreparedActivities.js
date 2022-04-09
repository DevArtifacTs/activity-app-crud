import { BiRun } from "react-icons/bi";
import { BiCycling } from "react-icons/bi";
import { BiSwim } from "react-icons/bi";
import { GiHiking} from "react-icons/gi";
import { BiWalk} from "react-icons/bi";
import { RiFootballLine } from "react-icons/ri";

// for icon configuration
import { IconContext } from "react-icons";

const style = {color: "blue",className: "global-class-name",  size: '60px' }


    const PreparedActivities = [
        {
            name : 'run',
            component : 
                        <IconContext.Provider value={style}>
                            <BiRun />
                        </IconContext.Provider>
        },
        {
            name : 'walk',
            component : 
                        <IconContext.Provider value={style}>
                            <BiWalk />
                        </IconContext.Provider>
        },
        {
            name : 'cycling',
            component : 
                        <IconContext.Provider value={style}>
                            <BiCycling  />
                        </IconContext.Provider>
        },
        {
            name : 'swimming',
            component : 
                        <IconContext.Provider value={style}>
                            <BiSwim />
                        </IconContext.Provider>
            
        },
        {
            name : 'hiking',
            component : 
                        <IconContext.Provider value={style}>
                            <GiHiking />
                        </IconContext.Provider>
            
        },
        {
            name : 'football',
            component : 
                        <IconContext.Provider value={style}>
                            <RiFootballLine />
                        </IconContext.Provider>
            
        },
    ]

    export default PreparedActivities ;