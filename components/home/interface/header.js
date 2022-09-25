import Button from '@mui/material/Button';
import {useRouter} from 'next/router';

export default function Header() {
    const router = useRouter();

    const handleClick = (e) => {
        e.preventDefault();
        router.push("/contact")
    }
    return (
        <>
            <div className="Header">
                <div className="Background"></div>

                <div className="Container">
                    <div className="Text">
                        <h1>Institut Spécialisée de Technologies Appliquées Hay Riad Rabat</h1>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et turpis congue, lacinia odio sed
                        </p>
                    </div>
                    <Button variant="outlined" className="Button" onClick={handleClick}>Contactez-nous</Button>
                </div>
            </div>
        </>
    );
}