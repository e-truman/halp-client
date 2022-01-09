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
                                image="https://image.freepik.com/free-vector/hand-drawn-clothing-donation-concept_52683-54811.jpg"
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
                                    <Link className="link" to='/community_resources/ESL Classes'>
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
                                    <Link className="link" to='/community_resources/Food'>
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
                                image="https://image.freepik.com/free-vector/happy-diverse-students-celebrating-graduation-from-school_74855-5853.jpg"
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    <Link className="link" to='/community_resources/GED%2fEducation'>
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
                                    <Link className="link" to='/community_resources/Immigrant%2fRefugee'>
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
                                image="https://image.freepik.com/free-vector/judge-concept-illustration_114360-2189.jpg"
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    <Link className="link" to='/community_resources/Lawyers (Divorce)'>
                                        Lawyers (Divorce)
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
                                image="https://image.freepik.com/free-vector/illustration-weighing-scale_53876-28507.jpg"
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    <Link className="link" to='/community_resources/Lawyers (Immigration)'>
                                        Lawyers (Immigration)
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
                                image="https://image.freepik.com/free-vector/illustration-people-with-justice-order-icons_53876-77429.jpg"
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    <Link className="link" to='/community_resources/Legal Assistance'>
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
                                    <Link className="link" to='/community_resources/Medical%2fDental'>
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
                                    <Link  className="link" to='/community_resources/Phone'>
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
                                    <Link className="link" to='/community_resources/Rehab - Drug%2fAlcohol'>
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
                                    <Link className="link" to='/community_resources/Rent%2fMortgage%2fUtility Help'>
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
                                    <Link className="link" to='/community_resources/Senior%2fDisabled Housing'>
                                        Senior/Disabled Housing
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
                                    <Link className="link" to='/community_resources/Students'>
                                        Students
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
                                image="https://image.freepik.com/free-vector/marking-checkbox-document-tax-management-billing-obligation-giving-permission-approve-decision-check-box-signature-stroke-warranty-list-vector-isolated-concept-metaphor-illustration_335657-4318.jpg"
                                alt="green iguana"
                            />
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
                <footer className="attributions">
                    <p>
                        Children's Services: <a className="link" href="https://www.freepik.com/vectors/party">Party vector created by pch.vector - www.freepik.com</a>, 
                        Childcare: <a className="link" href="https://www.freepik.com/vectors/school">School vector created by pch.vector - www.freepik.com</a>, 
                        Christmas: <a className="link" href="https://www.freepik.com/vectors/christmas">Christmas vector created by rawpixel.com - www.freepik.com</a>, 
                        Clothing: <a className="link" href="https://www.freepik.com/vectors/box">Box vector created by pikisuperstar - www.freepik.com</a>, 
                        Counseling: <a className="link" href="https://www.freepik.com/vectors/infographic">Infographic vector created by pch.vector - www.freepik.com</a>, 
                        Crisis Resources: <a className="link" href="https://www.freepik.com/vectors/woman">Woman vector created by pch.vector - www.freepik.com</a>, 
                        Disability: <a className="link" href="https://www.freepik.com/vectors/people">People vector created by pikisuperstar - www.freepik.com</a>, 
                        ESL Classes: <a className="link" href="https://www.freepik.com/vectors/school">School vector created by pch.vector - www.freepik.com</a>, 
                        Food: <a className="link" href="https://www.freepik.com/vectors/background">Background vector created by pikisuperstar - www.freepik.com</a>, 
                        GED/Education: <a className="link" href="https://www.freepik.com/vectors/certificate">Certificate vector created by pch.vector - www.freepik.com</a>,  
                        Health Insurance: <a className="link" href="https://www.freepik.com/vectors/background">Background vector created by rawpixel.com - www.freepik.com</a>, 
                        Housing: <a className="link" href="https://www.freepik.com/vectors/people">People vector created by pch.vector - www.freepik.com</a>, 
                        Immigrant/refugee: <a className="link" href="https://www.freepik.com/vectors/car">Car vector created by vectorjuice - www.freepik.com</a>, 
                        Job Training: <a className="link" href="https://www.freepik.com/vectors/business">Business vector created by pch.vector - www.freepik.com</a>, 
                        Lawyers (Divorce): <a className="link" href="https://www.freepik.com/vectors/work">Work vector created by stories - www.freepik.com</a>, 
                        Lawyers (Immigration): <a className="link" href="https://www.freepik.com/vectors/sale">Sale vector created by rawpixel.com - www.freepik.com</a>, 
                        Legal Assistance: <a className="link" href="https://www.freepik.com/vectors/background">Background vector created by rawpixel.com - www.freepik.com</a>, 
                        Medical/Dental: <a className="link" href="https://www.freepik.com/vectors/medical">Medical vector created by stories - www.freepik.com</a>, 
                        Men's Resources: <a className="link" href="https://www.freepik.com/vectors/background">Background vector created by pikisuperstar - www.freepik.com</a>, 
                        Phone: <a className="link" href="https://www.freepik.com/vectors/technology">Technology vector created by pch.vector - www.freepik.com</a>, 
                        Pet Resources: <a className="link" href="https://www.freepik.com/vectors/people">People vector created by pch.vector - www.freepik.com</a>, 
                        Rehab: <a className="link" href="https://www.freepik.com/vectors/health">Health vector created by freepik - www.freepik.com</a>, 
                        Rent/Mortgage/Utilities: <a className="link" href="https://www.freepik.com/vectors/cartoon">Cartoon vector created by vectorjuice - www.freepik.com</a>, 
                        Senior/disabled housing: <a className="link" href="https://www.freepik.com/vectors/character">Character vector created by vectorjuice - www.freepik.com</a>
                        Students: <a className="link" href="https://www.freepik.com/vectors/school">School vector created by pch.vector - www.freepik.com</a>,
                        Tax Prep: <a className="link" href="https://www.freepik.com/vectors/money">Money vector created by vectorjuice - www.freepik.com</a>
                        Teen Services: <a className="link" href="https://www.freepik.com/vectors/people">People vector created by pikisuperstar - www.freepik.com</a>
                        Transportation: <a className="link" href="https://www.freepik.com/vectors/car">Car vector created by pch.vector - www.freepik.com</a>
                    </p>
                </footer>


            </div>
        </>
    );





}