import Button from '@mui/material/Button';

export default function Header() {
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
                    <Button variant="contained" className="Button">Contactez-nous</Button>
                </div>
            </div>
        </>
    );
}