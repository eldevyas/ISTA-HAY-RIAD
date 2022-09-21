import BadgeIcon from '@mui/icons-material/Badge';
import FaceIcon from '@mui/icons-material/Face';
import BookIcon from '@mui/icons-material/Book';
import Paper from '@mui/material/Paper';

export default function SecondSection() {
    return(
        <>
            <div className="SecondSection">
               <div className="MainStats">
                    <div className="Column">
                        <BadgeIcon className="Icon"/>
                        <p className="Number">18</p>
                        <div className="Title">Formateurs Certifiés</div>
                    </div>

                    <div className="Column">
                        <FaceIcon className="Icon"/>
                        <p className="Number">400</p>
                        <div className="Title">Stagiares</div>
                    </div>

                    <div className="Column">
                        <BookIcon className="Icon"/>
                        <p className="Number">30</p>
                        <div className="Title">Formations</div>
                    </div>
                </div> 


                <div className='Cards'>
                    <Paper className="Card" variant="outlined" square>
                        <h1>
                        Lorem ipsum
                        </h1>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce placerat arcu fringilla interdum rutrum. Sed faucibus.
                        </p>
                    </Paper>
                    <Paper className="Card" variant="outlined" square>
                    <h1>
                        Lorem ipsum
                        </h1>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce placerat arcu fringilla interdum rutrum. Sed faucibus.
                        </p>
                    </Paper>
                    <Paper className="Card" variant="outlined" square>
                        <h1>
                        Lorem ipsum
                        </h1>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce placerat arcu fringilla interdum rutrum. Sed faucibus.
                        </p>
                    </Paper>
                    <Paper className="Card" variant="outlined" square>
                        <h1>
                        Lorem ipsum
                        </h1>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce placerat arcu fringilla interdum rutrum. Sed faucibus.
                        </p>
                    </Paper>
                </div>
            </div>
        </>
    );
}