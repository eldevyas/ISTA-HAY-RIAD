import Image from 'next/image';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import ReadMoreIcon from '@mui/icons-material/ReadMore';
import { useRouter } from 'next/router';

export default function Card(props) {
    const router = useRouter();

    const goToOriginal = () => {
        let href = props.href;
        window.open(href, '_blank');
    }

    const goToPost = () => {
        const href = props.href
        const title = props.title

        router.push(`/actualites/${title}?href=${href}`)
    }


    return(
        <>
            <div className="Card">
                <div className="Card-header">
                    <Image src={props.img} layout="fill" objectFit='cover'/>
                </div>

                <div className="Card-content">
                    <div className="Card-title">
                        <div className="Card-date">
                            {props.date}
                        </div>
                        {props.title}
                    </div>

                    <div className="Card-description">
                        {props.description}
                    </div>

                    <Stack spacing={2} direction="row">
                        <Button variant="outlined" className="ButtonSecondary" onClick={goToOriginal}>Lire au Site Originale</Button>
                        <Button variant="contained" className="ButtonPrimary" startIcon={<ReadMoreIcon/>} onClick={goToPost}>Lire Plus</Button>
                    </Stack>
                </div>
            </div>
        </>
    );
} 