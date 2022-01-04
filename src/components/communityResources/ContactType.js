import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom"
import "./CommunityResource.css"


export const ContactTypeList = (props) => {
    return (
        <>
            <div className="card_container">


                <div className="contact_type_cards">

                    <div className="card">

                        <Card className="link" sx={{ maxWidth: 345 }}>
                            <CardMedia
                                component="img"
                                height="200"
                                image="https://image.freepik.com/free-vector/young-teacher-with-joyful-kids_74855-6162.jpg"
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    <Link className="link" to="/community_resources/Childcare">
                                        Childcare
                                    </Link>
                                </Typography>
                            </CardContent>
                        </Card>
                    </div>

                    <div className="card">

                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                                component="img"
                                height="200"
                                image="https://image.freepik.com/free-vector/diversity-childhood-concept_74855-7176.jpg"
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    <Link className="link" to="/community_resources/Children's Services">
                                        Children's Services
                                    </Link>
                                </Typography>
                            </CardContent>
                        </Card>
                    </div>



                    <div className="card">

                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                                component="img"
                                height="200"
                                image="https://image.freepik.com/free-vector/festive-christmas-clipart-elements-collection_53876-95704.jpg"
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    <Link className="link" to='/community_resources/Christmas'>
                                        Christmas
                                    </Link>
                                </Typography>
                            </CardContent>
                        </Card>
                    </div>


                    <div className="card">

                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                                component="img"
                                height="200"
                                image="https://image.freepik.com/free-vector/hand-drawn-clothing-donation-illustration_23-2148814803.jpg"
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    <Link className="link" to='/community_resources/Clothing'>
                                        Clothing
                                    </Link>
                                </Typography>
                            </CardContent>
                        </Card>
                    </div>


                    <div className="card">

                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                                component="img"
                                height="200"
                                image="https://image.freepik.com/free-vector/tiny-people-beautiful-flower-garden-inside-female-head-isolated-flat-illustration_74855-11098.jpg"
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    <Link className="link" to='/community_resources/Counseling'>
                                        Counseling
                                    </Link>
                                </Typography>
                            </CardContent>
                        </Card>
                    </div>




                    <div className="card">

                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                                component="img"
                                height="200"
                                image="https://image.freepik.com/free-vector/friendship-help-empathy-concept_74855-14026.jpg"
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    <Link className="link" to='/community_resources/Crisis Info Resources'>
                                        Crisis Resources
                                    </Link>
                                </Typography>
                            </CardContent>
                        </Card>
                    </div>


                    <div className="card">

                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                                component="img"
                                height="200"
                                image="https://image.freepik.com/free-vector/flat-design-people-with-disability-room_52683-48841.jpg"
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    <Link className="link" to='/community_resources/Disability'>
                                        Disability
                                    </Link>
                                </Typography>
                            </CardContent>
                        </Card>
                    </div>



                    <div className="card">

                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                                component="img"
                                height="200"
                                image="https://image.freepik.com/free-vector/happy-women-learning-language-online-isolated-flat-vector-illustration-cartoon-female-characters-taking-individual-lessons-through-messenger-education-digital-technology-concept_74855-10088.jpg"
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    <Link className="link" to='/community_resources/ESL classes'>
                                        ESL Classes
                                    </Link>
                                </Typography>
                            </CardContent>
                        </Card>
                    </div>



                    <div className="card">

                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                                component="img"
                                height="200"
                                image="https://image.freepik.com/free-vector/ramen-soup-blue-background_52683-46004.jpg"
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    <Link className="link" to='/community_resources/GED/Food'>
                                        Food
                                    </Link>
                                </Typography>
                            </CardContent>
                        </Card>
                    </div>



                    <div className="card">

                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                                component="img"
                                height="200"
                                image="https://image.freepik.com/free-vector/students-watching-webinar-computer-studying-online_74855-15522.jpg"
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    <Link className="link" to='/community_resources/GED/Education'>
                                        GED/Education
                                    </Link>
                                </Typography>
                            </CardContent>
                        </Card>
                    </div>

                    <div className="card">

                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                                component="img"
                                height="200"
                                image="https://image.freepik.com/free-vector/characters-extended-family-with-healthcare-illustration_53876-40414.jpg"
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    <Link className="link" to='/community_resources/Health Insurance'>
                                        Health Insurance
                                    </Link>
                                </Typography>
                            </CardContent>
                        </Card>
                    </div>

                    <div className="card">

                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                                component="img"
                                height="200"
                                image="https://image.freepik.com/free-vector/happy-family-with-kid-buying-new-house_74855-14047.jpg"
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    <Link className="link" to='/community_resources/Housing'>
                                        Housing
                                    </Link>
                                </Typography>
                            </CardContent>
                        </Card>
                    </div>

                    <div className="card">

                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                                component="img"
                                height="200"
                                image="https://image.freepik.com/free-vector/international-migration-abstract-concept-vector-illustration-international-migrants-border-control-movement-people-leaving-country-application-form-travel-with-bag-abstract-metaphor_335657-3972.jpg"
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    <Link className="link" to='/community_resources/Immigrant/Refugee'>
                                        Immigrant/Refugee
                                    </Link>
                                </Typography>
                            </CardContent>
                        </Card>
                    </div>

                    <div className="card">

                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                                component="img"
                                height="200"
                                image="https://image.freepik.com/free-vector/coach-speaking-before-audience-mentor-presenting-charts-reports-employees-meeting-business-training-seminar-conference-vector-illustration-presentation-lecture-education_74855-8294.jpg"
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    <Link className="link" to='/community_resources/Job Training'>
                                        Job Training
                                    </Link>
                                </Typography>
                            </CardContent>
                        </Card>
                    </div>

                    <div className="card">

                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                                component="img"
                                height="200"
                                image="https://image.freepik.com/free-vector/lawyer-concept-illustration_114360-4122.jpg"
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    <Link className="link" to='/community_resources/Lawyers/Legal Assistance'>
                                        Legal Assistance
                                    </Link>
                                </Typography>
                            </CardContent>
                        </Card>
                    </div>

                    <div className="card">

                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                                component="img"
                                height="200"
                                image="https://image.freepik.com/free-vector/doctors-concept-illustration_114360-1515.jpg"
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    <Link className="link" to='/community_resources/Medical/Dental'>
                                        Medical/Dental
                                    </Link>
                                </Typography>
                            </CardContent>
                        </Card>
                    </div>

                    <div className="card">

                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                                component="img"
                                height="200"
                                image="https://image.freepik.com/free-vector/young-people-wearing-winter-clothes-jumping-with-trees-background_52683-27897.jpg"
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    <Link className="link" to="/community_resources/Men's Resources">
                                        Men’s Resources
                                    </Link>
                                </Typography>
                            </CardContent>
                        </Card>
                    </div>

                    <div className="card">

                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                                component="img"
                                height="200"
                                image="https://image.freepik.com/free-vector/tiny-doctors-caring-dog-vet-office_74855-6677.jpg"
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    <Link className="link" to='/community_resources/Pet Resources'>
                                        Pet Resources
                                    </Link>
                                </Typography>
                            </CardContent>
                        </Card>
                    </div>

                    <div className="card">

                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                                component="img"
                                height="200"
                                image="https://image.freepik.com/free-vector/human-hand-holding-mobile-phone-with-text-messages_74855-6531.jpg"
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    <Link  className="link" to='/community_resources/Typography'>
                                        Phone
                                    </Link>
                                </Typography>
                            </CardContent>
                        </Card>
                    </div>

                    <div className="card">

                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                                component="img"
                                height="200"
                                image="https://image.freepik.com/free-vector/organic-flat-people-meditating-peacefully_23-2148910081.jpg"
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    <Link className="link" to='/community_resources/Rehab (Drug and Alcohol)'>
                                        Rehab
                                    </Link>
                                </Typography>
                            </CardContent>
                        </Card>
                    </div>

                    <div className="card">

                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                                component="img"
                                height="200"
                                image="https://image.freepik.com/free-vector/house-rent-abstract-concept-vector-illustration-booking-house-online-best-rental-property-real-estate-service-accommodation-marketplace-rental-listing-monthly-rent-abstract-metaphor_335657-1954.jpg"
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    <Link className="link" to='/community_resources/Rent/Mortgage/Utility'>
                                        Rent/Mortgage/Utility
                                    </Link>
                                </Typography>
                            </CardContent>
                        </Card>
                    </div>

                    <div className="card">

                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                                component="img"
                                height="200"
                                image="https://image.freepik.com/free-vector/pensioners-pastime-senior-home-aged-couple-playing-chess-activities-seniors-elderly-active-lifestyle-older-people-time-spending-concept-pinkish-coral-bluevector-isolated-illustration_335657-1499.jpg"
                                alt=""
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    <Link className="link" to='/community_resources/Senior/Disabled Housing'>
                                        Senior/Disabled Housing
                                    </Link>
                                </Typography>
                            </CardContent>
                        </Card>
                    </div>

                    <div className="card">

                        <Card sx={{ maxWidth: 345 }}>
                            {/* <CardMedia
                                component="img"
                                height="200"
                                image="https://media.istockphoto.com/vectors/kindergarten-teacher-walking-with-kids-vector-id1217089640?k=20&m=1217089640&s=612x612&w=0&h=5KrXh3uSbLTyppT6VVFQZlI9sCurXpX9ZTb2DtS3uJw="
                                alt="green iguana"
                            /> */}
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    <Link className="link" to='/community_resources/Students'>
                                        Students
                                    </Link>
                                </Typography>
                            </CardContent>
                        </Card>
                    </div>

                    <div className="card">

                        <Card sx={{ maxWidth: 345 }}>
                            {/* <CardMedia
                                component="img"
                                height="200"
                                image="https://media.istockphoto.com/vectors/kindergarten-teacher-walking-with-kids-vector-id1217089640?k=20&m=1217089640&s=612x612&w=0&h=5KrXh3uSbLTyppT6VVFQZlI9sCurXpX9ZTb2DtS3uJw="
                                alt="green iguana"
                            /> */}
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    <Link className="link" to='/community_resources/Tax Prep'>
                                        Tax Prep
                                    </Link>
                                </Typography>
                            </CardContent>
                        </Card>
                    </div>

                    <div className="card">

                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                                component="img"
                                height="200"
                                image="https://image.freepik.com/free-vector/young-people-jumping-together-illustration_52683-27019.jpg"
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    <Link className="link" to='/community_resources/Teen Services'>
                                        Teen Services
                                    </Link>
                                </Typography>
                            </CardContent>
                        </Card>
                    </div>

                    <div className="card">

                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                                component="img"
                                height="200"
                                image="https://image.freepik.com/free-vector/passengers-waiting-bus-city-queue-town-road-flat-vector-illustration-public-transport-urban-lifestyle_74855-8493.jpg"
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    <Link className="link" to='/community_resources/Transportation Services'>
                                        Transportation
                                    </Link>
                                </Typography>
                            </CardContent>
                        </Card>
                    </div>



                </div>
                <footer>
                    <p>
                        Children's Services: <a href="https://www.freepik.com/vectors/party">Party vector created by pch.vector - www.freepik.com</a>
                        Childcare: <a href="https://www.freepik.com/vectors/school">School vector created by pch.vector - www.freepik.com</a>
                        Christmas: <a href="https://www.freepik.com/vectors/christmas">Christmas vector created by rawpixel.com - www.freepik.com</a>
                        Clothing: <a href="https://www.freepik.com/vectors/clothes">Clothes vector created by freepik - www.freepik.com</a>
                        Counseling: <a href="https://www.freepik.com/vectors/infographic">Infographic vector created by pch.vector - www.freepik.com</a>
                        Crisis Resources: <a href="https://www.freepik.com/vectors/woman">Woman vector created by pch.vector - www.freepik.com</a>
                        Disability: <a href="https://www.freepik.com/vectors/people">People vector created by pikisuperstar - www.freepik.com</a>
                        ESL Classes: <a href="https://www.freepik.com/vectors/school">School vector created by pch.vector - www.freepik.com</a>
                        Food: <a href="https://www.freepik.com/vectors/background">Background vector created by pikisuperstar - www.freepik.com</a>
                        GED/Education: <a href="https://www.freepik.com/vectors/school">School vector created by pch.vector - www.freepik.com</a>
                        Health Insurance: <a href="https://www.freepik.com/vectors/background">Background vector created by rawpixel.com - www.freepik.com</a>
                        Housing: <a href="https://www.freepik.com/vectors/people">People vector created by pch.vector - www.freepik.com</a>
                        Immigrant/refugee: <a href="https://www.freepik.com/vectors/car">Car vector created by vectorjuice - www.freepik.com</a>
                        Job Training: <a href="https://www.freepik.com/vectors/business">Business vector created by pch.vector - www.freepik.com</a>
                        Legal Assistance: <a href="https://www.freepik.com/vectors/woman">Woman vector created by stories - www.freepik.com</a>
                        Medical: <a href="https://www.freepik.com/vectors/medical">Medical vector created by stories - www.freepik.com</a>
                        Men's Resources: <a href="https://www.freepik.com/vectors/background">Background vector created by pikisuperstar - www.freepik.com</a>
                        Phone: <a href="https://www.freepik.com/vectors/technology">Technology vector created by pch.vector - www.freepik.com</a>
                        Pets: <a href="https://www.freepik.com/vectors/people">People vector created by pch.vector - www.freepik.com</a>
                        Rehab: <a href="https://www.freepik.com/vectors/health">Health vector created by freepik - www.freepik.com</a>
                        Rent, Mortgage, Utilities: <a href="https://www.freepik.com/vectors/cartoon">Cartoon vector created by vectorjuice - www.freepik.com</a>
                        Senior/disabled housing: <a href="https://www.freepik.com/vectors/character">Character vector created by vectorjuice - www.freepik.com</a>
                        Transportation: <a href="https://www.freepik.com/vectors/car">Car vector created by pch.vector - www.freepik.com</a>
                    </p>
                </footer>


            </div>
        </>
    );





}