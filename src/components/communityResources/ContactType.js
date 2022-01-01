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
                                image="https://image.freepik.com/free-vector/diversity-childhood-concept_74855-7176.jpg"
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
                                image="https://image.freepik.com/free-vector/young-teacher-with-joyful-kids_74855-6162.jpg"
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
                                image="https://image.freepik.com/free-vector/volunteers-helping-disabled-friends-outdoor-walking_74855-7933.jpg"
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
                                image="https://image.freepik.com/free-vector/online-language-class-illustration_1284-64727.jpg"
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
                                image="https://image.freepik.com/free-vector/student-centered-education-knowledge-gaining-remote-graduation_335657-3309.jpg"
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
                                image="https://image.freepik.com/free-vector/queue-immigrants-standing-holding-luggage-waiting-departure-airport-group-tourists-with-globe-map-pointers-destination-line-background-travel-immigration-concept_74855-10142.jpg"
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
                                image="https://image.freepik.com/free-vector/office-concept-illustration_114360-1248.jpg"
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
                                image="https://image.freepik.com/free-vector/accountability-abstract-concept_335657-3017.jpg"
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
                                alt="green iguana"
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
                            {/* <CardMedia
                                component="img"
                                height="200"
                                image="https://media.istockphoto.com/vectors/kindergarten-teacher-walking-with-kids-vector-id1217089640?k=20&m=1217089640&s=612x612&w=0&h=5KrXh3uSbLTyppT6VVFQZlI9sCurXpX9ZTb2DtS3uJw="
                                alt="green iguana"
                            /> */}
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


            </div>
        </>
    );





}