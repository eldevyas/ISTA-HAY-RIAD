import {AnimateSharedLayout, motion} from 'framer-motion';
import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Chip from '@mui/material/Chip';


function Card(props) {
    const [open,setOpen]=useState(false);

    function limit (string = '', limit = 0) {  
        return string.substring(0, limit)
    }

    const Chips = props.chips;


    return (
        <AnimateSharedLayout>
            {open ? 
                (
                    <div className="expanded-background">
                        <div className="Outside" onClick={() => setOpen(false)}></div>
                        <motion.div onClick={() => setOpen(true)} className='expanded-card' layoutId="expandable-card" id="clickbox">
                            <motion.div className='TopImage' layoutId='ImageTop'>
                                <Image src={props.image} alt="Image" layout='fill' objectFit='cover'/>
                            </motion.div>
                            <motion.div className='BottomContent' layoutId="ContentBottom">
                                <motion.h1 className='expanded-card-h' layoutId="expandable-card-h">{props.title ? props.title : "Title here"}</motion.h1>
                                <p>{props.description ? props.description : "Full length description here."}</p>

                                <motion.div className="Chips" layoutId="Chips">
                                    {Chips.map((OneChip, index) => (
                                        <Chip className='Chip' label={OneChip} variant="outlined"/>
                                    ))}
                                </motion.div>

                                <motion.div className="Badges" layoutId='Badges'>

                                </motion.div>
                            </motion.div>
                        </motion.div>
                    </div>
                )
                :
                (
                <motion.div onClick={() => setOpen(true)} className='normal-card' layoutId="expandable-card" id="clickbox">
                    <motion.div className='TopImage' layoutId='ImageTop'>
                        <Image src={props.image} alt="Image" layout='fill' objectFit='cover'/>
                    </motion.div>
                    <motion.div className='BottomContent' layoutId="ContentBottom">
                        <motion.h1 className='expanded-card-h' layoutId="expandable-card-h">{props.title ? props.title : "Title here"}</motion.h1>
                        <p>{props.description ? limit(props.description, 100) + "..." : "Description here" + "..."}</p>

                        <motion.div className="Chips" layoutId="Chips">
                            {Chips.map((OneChip, index) => (
                                <Chip className='Chip' label={OneChip} variant="outlined"/>
                            ))}
                        </motion.div>
                    </motion.div>
                </motion.div>
                )
            }
        </AnimateSharedLayout>
    );
}
export default Card;