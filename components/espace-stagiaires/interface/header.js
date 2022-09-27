import Image from "next/image";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import React from "react";

export default function EspaceHeader() {
    const [choice, setChoice] = React.useState('');

    const handleChange = (event) => {
      setChoice(event.target.value);
    };

    return(
    <>
        <div className="EspaceHeader">
            <div className="Background">
                <Image src="/ista-hay-riad.jpeg" layout="fill" objectFit="cover" alt="ISTA HAY RIAD"/>
            </div>

            <div className="Content">
                <h1>Consultez les emplois du temps</h1>

                <FormControl sx={{ m: 1, minWidth: 120, color: "#fff" }} size="small">
                    <InputLabel id="demo-select-small" sx={{ color: "#fff" }}>Choix</InputLabel>
                    <Select
                        labelId="demo-select-small"
                        id="demo-select-small"
                        value={choice}
                        label="Choix"
                        onChange={handleChange}
                    >
                        <MenuItem value="">
                        <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>En</MenuItem>
                        <MenuItem value={20}>Cours</MenuItem>
                        <MenuItem value={30}>De</MenuItem>
                        <MenuItem value={40}>Développement</MenuItem>
                    </Select>
                </FormControl>
            </div>
        </div>
    </>
    );
}