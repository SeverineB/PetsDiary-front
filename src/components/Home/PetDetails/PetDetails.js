/* eslint-disable no-console */
/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react'
import dayjs from 'dayjs'
import { Link, useParams, useHistory } from 'react-router-dom'
import { Modal } from 'react-bootstrap'
import PropTypes from 'prop-types'

import cancelIcon from '../../../assets/icons/close.png'
//import Weight from '../../../assets/icons/weight-scale.svg';

import './PetDetails.scss';

const PetDetails = ({
    pet,
    saveCurrentPet,
    saveCurrentWeight,
    saveCurrentVaccine,
    saveCurrentAntiflea,
    saveCurrentDeworming,
    savePetToDelete,
    deletePetOnScreen,
    deletePet,
}) => {
    const [showDetails, setShowDetails] = useState(false)
    const [showDeletePetModal, setShowDeletePetModal] = useState(false)

    const handleCloseDeletePetModal = () => setShowDeletePetModal(false)
    const handleShowDeletePetModal = () => setShowDeletePetModal(true)

    // useParams is used to retrieve the id in url params to filter the pet to display
    const params = useParams();
    const history = useHistory();

    useEffect(() => {
        setShowDetails(true);
        saveCurrentPet(pet);
        saveCurrentWeight(pet.weight);
        saveCurrentVaccine(pet.vaccine);
        saveCurrentAntiflea(pet.antiflea);
        saveCurrentDeworming(pet.deworming);
        localStorage.setItem('pet_id', pet._id);
    }, []);
    
    const handleDeletePet = () => {
        savePetToDelete(pet._id);
        deletePet();
        deletePetOnScreen(pet._id);
        history.push('/');
    };

    return (
        <div className={showDetails ? 'pet-details' : 'pet-details-hidden'}>
            <Link to="/pet">
                <div className="back-icon-container" title="Revenir à la page précédente">
                    <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 40 40">
                        <g>
                            <path d="M20,0C8.973,0,0,8.973,0,20c0,11.027,8.973,20,20,20c11.027,0,20-8.973,20-20C40,8.973,31.027,0,20,0z M27.059,22.281
                                h-9.187l2.142,2.521c0.815,0.96,0.698,2.399-0.263,3.216c-0.429,0.363-0.953,0.543-1.476,0.543c-0.646,0-1.288-0.272-1.739-0.806
                                l-5.334-6.278c-0.723-0.853-0.723-2.103,0-2.953l5.334-6.279c0.814-0.961,2.254-1.078,3.215-0.264
                                c0.961,0.815,1.078,2.256,0.263,3.217l-2.142,2.521h9.187c1.26,0,2.28,1.021,2.28,2.281S28.318,22.281,27.059,22.281z"/>
                        </g>
                    </svg>
                </div>
            </Link>
            <div className="pet-details-content">
                <div className="pet-details-content-infos">
                    <div className="pet-delete">
                        <button className="pet-delete-btn" type="button" onClick={handleShowDeletePetModal} title="Supprimer cet animal">
                            <img src={cancelIcon} alt="cancel croce" />
                        </button>
                    </div>
                    <div className="details-links">
                        <div className="details-links-item">
                            <Link className="details-links-item-content" to={`/pet/${pet._id}/weight`}>
                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0" y="0" viewBox="0 0 512 512">
                                    <g>
                                        <g>
                                            <path d="m154.53 113.145 22.281 66.855h61.163l43.867-65.801 24.961 16.641-32.775 49.16h61.163l22.28-66.855c-19.673-8.218-60.982-23.145-101.47-23.145s-81.797 14.927-101.47 23.145z"/>
                                            <path d="m467 0h-422c-24.814 0-45 20.186-45 45 0 .732 0 3.26 30.117 425.237 1.67 23.423 21.387 41.763 44.883 41.763h362c23.496 0 43.213-18.34 44.883-41.763.081-1.147-1.887 26.646 30.117-425.237 0-24.814-20.186-45-45-45zm-407 90v-30h30v30zm60 362h-30v-30h30zm151 0h-30v-211h30zm-115.811-242-37.529-112.603c56.404-27.928 102.369-37.397 138.34-37.397 35.455 0 81.405 9.206 138.34 37.397l-37.529 112.603zm266.811 242h-30v-30h30zm30-362h-30v-30h30z"/>
                                        </g>
                                    </g>
                                </svg>
                                {/* <Weight /> */}
                                <p>Poids</p>
                            </Link>
                        </div>
                        <div className="details-links-item">
                            <Link className="details-links-item-content" to={`/pet/${pet._id}/vaccine`}>
                                <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 469.333 469.333">
                                    <g>
                                        <path d="M466.204,87.792L381.417,3.125c-4.173-4.167-10.932-4.167-15.105,0c-4.173,4.167-4.173,10.917,0,15.083L379.122,31
                                                l-70.35,70.25l-44.855-44.792c-4.173-4.167-10.932-4.167-15.105,0c-4.173,4.167-4.173,10.917,0,15.083L273.305,96L67.22,301.792
                                                c-2.003,2-3.129,4.708-3.129,7.542c0,22.622,8.202,43.164,21.358,59.589l-82.32,82.203c-4.173,4.167-4.173,10.917,0,15.083
                                                c2.086,2.083,4.819,3.125,7.552,3.125c2.733,0,5.466-1.042,7.552-3.125l82.32-82.203c16.448,13.138,37.019,21.328,59.673,21.328
                                                c2.837,0,5.55-1.125,7.552-3.125l206.084-205.792l24.493,24.458c2.086,2.083,4.819,3.125,7.552,3.125s5.466-1.042,7.552-3.125
                                                c4.173-4.167,4.173-10.917,0-15.083l-46.524-46.458l70.35-70.25l13.811,13.792c2.086,2.083,4.819,3.125,7.552,3.125
                                                s5.466-1.042,7.552-3.125C470.376,98.708,470.376,91.958,466.204,87.792z M135.542,327.542c-2.083,2.083-4.813,3.125-7.542,3.125
                                                c-2.729,0-5.458-1.042-7.542-3.125l-19.115-19.115c-4.167-4.167-4.167-10.917,0-15.083c4.167-4.167,10.917-4.167,15.083,0
                                                l19.115,19.115C139.708,316.625,139.708,323.375,135.542,327.542z M167.542,274.208c-2.083,2.083-4.813,3.125-7.542,3.125
                                                c-2.729,0-5.458-1.042-7.542-3.125l-8.448-8.448c-4.167-4.167-4.167-10.917,0-15.083c4.167-4.167,10.917-4.167,15.083,0
                                                l8.448,8.448C171.708,263.292,171.708,270.042,167.542,274.208z M220.875,242.208c-2.083,2.083-4.813,3.125-7.542,3.125
                                                c-2.729,0-5.458-1.042-7.542-3.125l-19.115-19.115c-4.167-4.167-4.167-10.917,0-15.083c4.167-4.167,10.917-4.167,15.083,0
                                                l19.115,19.115C225.042,231.292,225.042,238.042,220.875,242.208z M252.875,188.875c-2.083,2.083-4.813,3.125-7.542,3.125
                                                c-2.729,0-5.458-1.042-7.542-3.125l-8.448-8.448c-4.167-4.167-4.167-10.917,0-15.083c4.167-4.167,10.917-4.167,15.083,0
                                                l8.448,8.448C257.042,177.958,257.042,184.708,252.875,188.875z"/>
                                        </g>
                                </svg>
                                <p>Vaccins</p>
                            </Link>
                        </div>
                        <div className="details-links-item">
                            <Link className="details-links-item-content" to={`/pet/${pet._id}/antiflea`}>
                                <svg id="Capa_1" enableBackground="new 0 0 512.015 512.015" viewBox="0 0 512.015 512.015" xmlns="http://www.w3.org/2000/svg">
                                    <path d="m460.502 347.905-28.25-27.197c3.959-2.378 7.844-4.938 11.631-7.73 8.891-6.555 10.784-19.075 4.229-27.966-6.554-8.891-19.075-10.784-27.966-4.229-8.723 6.431-18.118 11.326-28.106 14.698.467-3.502.807-7.057.957-10.635.307-7.32.131-14.766-.49-22.292 31.992-43.1 42.652-93.398 46.204-121.918 1.979 1.296 3.957 2.597 5.919 3.924 17.118 11.571 27.352 30.813 27.374 51.469.006 5.634-1.432 13.14-3.942 20.595-3.526 10.468 2.101 21.812 12.568 25.338 10.469 3.525 21.813-2.101 25.338-12.569 2.761-8.195 6.049-20.643 6.036-33.407-.037-33.943-16.85-65.557-44.974-84.567-84.344-57.013-183.547-88.411-279.334-88.411-73.739 0-126.757 12.363-157.581 36.747-19.295 15.262-29.973 35.493-30.099 57.001-.126 4.333.212 20.314 11.085 31.713 6.578 6.895 15.369 10.539 25.425 10.539h45.565l-14.48 30.373c-10.729 22.506-25.108 42.856-42.738 60.485-16.029 16.03-24.857 37.342-24.857 60.012v23.13c0 11.046 8.954 20 20 20s20-8.954 20-20v-23.13c0-11.985 4.667-23.253 13.143-31.728 20.855-20.856 37.867-44.931 50.561-71.556l13.297-27.891v70.435c0 11.985-4.667 23.253-13.143 31.728-16.029 16.03-24.857 37.343-24.857 60.013v22.13c0 11.046 8.954 20 20 20s20-8.954 20-20v-22.13c0-11.985 4.667-23.253 13.143-31.728 16.029-16.03 24.857-37.343 24.857-60.013v-24.696c10.838 14.238 23.012 29.143 37 43.393v57.585c0 20.745 7.572 40.724 21.322 56.255l21.405 24.18c7.27 8.212 11.272 18.773 11.272 29.741v33.412c0 11.046 8.954 20 20 20s20-8.954 20-20v-33.412c0-20.745-7.572-40.724-21.322-56.255l-21.405-24.18c-7.27-8.212-11.272-18.773-11.272-29.741v-23.412c11.794 8.238 23.889 15.144 36.336 20.75l42.801 46.01c25.706 27.209 39.863 62.809 39.863 100.24 0 11.046 8.954 20 20 20s20-8.954 20-20c0-47.015-19.689-93.978-51.627-128.512 5.102.333 10.888.512 16.049.512 11.843 0 23.267-1.291 34.241-3.839l41.082 39.553c24.947 24.019 39.256 57.655 39.256 92.286 0 11.046 8.954 20 20 20s20-8.954 20-20c-.003-45.445-18.779-89.584-51.516-121.103zm-420.487-228.897c0-11 5.158-20.163 14.916-27.882 4.605-3.643 10.826-7.485 19.209-11.119 4.18 8.098 9.105 21.023 10.873 39.001zm109.394 28.444c-8.004-9.674-15.717-17.365-23.881-22.298-.992-24.136-6.491-42.869-12.416-56.352 14.214-2.605 31.256-4.523 51.679-5.347.596 20.988-.951 56.77-15.382 83.997zm52.405 69.196c-9.753-11.836-18.582-23.786-26.75-35.017 7.152-9.721 12.658-20.467 16.862-31.57 7.037 12.798 13.013 28.731 13.089 46.034.03 6.571-1.047 13.444-3.201 20.553zm1.783-119.02c1.271-12.923 1.455-24.76 1.228-34.251 13.931.589 27.918 1.895 41.897 3.889.211 2.825 2.511 39.214-13.833 75.304-9.245-20.62-21.646-36.361-29.292-44.942zm65.084 179.133c-13.475-7.995-25.664-17.505-36.787-27.829 8.464-17.339 12.864-34.536 13.098-51.182 5.433-6.388 10.171-13 14.305-19.708 7.893 18.708 15.864 43.646 15.718 67.845-.068 11.288-2.199 21.622-6.334 30.874zm11.177-147.202c6.021-22.624 7.142-42.667 7.121-54.643 12.696 3.021 25.328 6.619 37.851 10.745-.221 7.779-2.323 55.166-20.88 97.63-8.573-25.838-19.698-46.173-24.092-53.732zm73.175 153.612c-.24 5.731-1.274 11.81-2.588 17.695-16.356-.61-31.409-3.341-45.309-7.718 6.392-14.341 9.779-30.287 9.88-47.019.008-1.265-.007-2.529-.032-3.793 8.83-10.959 16.097-23.016 22.077-35.435 11.407 25.86 16.985 52.081 15.972 76.27zm26.634-77.442c-6.182-16.89-14.426-33.665-24.59-49.872 5.516-22.248 7.922-42.255 8.969-55.333 12.328 5.298 24.491 11.122 36.433 17.476-.117 4.589-1.7 45.765-20.812 87.729z"/><path d="m460.502 347.905-28.25-27.197c3.959-2.378 7.844-4.938 11.631-7.73 8.891-6.555 10.784-19.075 4.229-27.966-6.554-8.891-19.075-10.784-27.966-4.229-8.723 6.431-18.118 11.326-28.106 14.698.467-3.502.807-7.057.957-10.635.307-7.32.131-14.766-.49-22.292 31.992-43.1 42.652-93.398 46.204-121.918 1.979 1.296 3.957 2.597 5.919 3.924 17.118 11.571 27.352 30.813 27.374 51.469.006 5.634-1.432 13.14-3.942 20.595-3.526 10.468 2.101 21.812 12.568 25.338 10.469 3.525 21.813-2.101 25.338-12.569 2.761-8.195 6.049-20.643 6.036-33.407-.037-33.943-16.85-65.557-44.974-84.567-84.344-57.013-183.547-88.411-279.334-88.411-73.739 0-126.757 12.363-157.581 36.747-19.295 15.262-29.973 35.493-30.099 57.001-.126 4.333.212 20.314 11.085 31.713 6.578 6.895 15.369 10.539 25.425 10.539h45.565l-14.48 30.373c-10.729 22.506-25.108 42.856-42.738 60.485-16.029 16.03-24.857 37.342-24.857 60.012v23.13c0 11.046 8.954 20 20 20s20-8.954 20-20v-23.13c0-11.985 4.667-23.253 13.143-31.728 20.855-20.856 37.867-44.931 50.561-71.556l13.297-27.891v70.435c0 11.985-4.667 23.253-13.143 31.728-16.029 16.03-24.857 37.343-24.857 60.013v22.13c0 11.046 8.954 20 20 20s20-8.954 20-20v-22.13c0-11.985 4.667-23.253 13.143-31.728 16.029-16.03 24.857-37.343 24.857-60.013v-24.696c10.838 14.238 23.012 29.143 37 43.393v57.585c0 20.745 7.572 40.724 21.322 56.255l21.405 24.18c7.27 8.212 11.272 18.773 11.272 29.741v33.412c0 11.046 8.954 20 20 20s20-8.954 20-20v-33.412c0-20.745-7.572-40.724-21.322-56.255l-21.405-24.18c-7.27-8.212-11.272-18.773-11.272-29.741v-23.412c11.794 8.238 23.889 15.144 36.336 20.75l42.801 46.01c25.706 27.209 39.863 62.809 39.863 100.24 0 11.046 8.954 20 20 20s20-8.954 20-20c0-47.015-19.689-93.978-51.627-128.512 5.102.333 10.888.512 16.049.512 11.843 0 23.267-1.291 34.241-3.839l41.082 39.553c24.947 24.019 39.256 57.655 39.256 92.286 0 11.046 8.954 20 20 20s20-8.954 20-20c-.003-45.445-18.779-89.584-51.516-121.103zm-420.487-228.897c0-11 5.158-20.163 14.916-27.882 4.605-3.643 10.826-7.485 19.209-11.119 4.18 8.098 9.105 21.023 10.873 39.001zm109.394 28.444c-8.004-9.674-15.717-17.365-23.881-22.298-.992-24.136-6.491-42.869-12.416-56.352 14.214-2.605 31.256-4.523 51.679-5.347.596 20.988-.951 56.77-15.382 83.997zm52.405 69.196c-9.753-11.836-18.582-23.786-26.75-35.017 7.152-9.721 12.658-20.467 16.862-31.57 7.037 12.798 13.013 28.731 13.089 46.034.03 6.571-1.047 13.444-3.201 20.553zm1.783-119.02c1.271-12.923 1.455-24.76 1.228-34.251 13.931.589 27.918 1.895 41.897 3.889.211 2.825 2.511 39.214-13.833 75.304-9.245-20.62-21.646-36.361-29.292-44.942zm65.084 179.133c-13.475-7.995-25.664-17.505-36.787-27.829 8.464-17.339 12.864-34.536 13.098-51.182 5.433-6.388 10.171-13 14.305-19.708 7.893 18.708 15.864 43.646 15.718 67.845-.068 11.288-2.199 21.622-6.334 30.874zm11.177-147.202c6.021-22.624 7.142-42.667 7.121-54.643 12.696 3.021 25.328 6.619 37.851 10.745-.221 7.779-2.323 55.166-20.88 97.63-8.573-25.838-19.698-46.173-24.092-53.732zm73.175 153.612c-.24 5.731-1.274 11.81-2.588 17.695-16.356-.61-31.409-3.341-45.309-7.718 6.392-14.341 9.779-30.287 9.88-47.019.008-1.265-.007-2.529-.032-3.793 8.83-10.959 16.097-23.016 22.077-35.435 11.407 25.86 16.985 52.081 15.972 76.27zm26.634-77.442c-6.182-16.89-14.426-33.665-24.59-49.872 5.516-22.248 7.922-42.255 8.969-55.333 12.328 5.298 24.491 11.122 36.433 17.476-.117 4.589-1.7 45.765-20.812 87.729z"/>
                                </svg>
                                <p>Anti-puces</p>
                            </Link>
                        </div>
                        <div className="details-links-item">
                            <Link className="details-links-item-content" to={`/pet/${pet._id}/deworming`}>
                                <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 512 512">
                                    <g>
                                        <g>
                                            <path d="M448,300.308h-39.385v-64c0-84.153-68.462-152.615-152.615-152.615s-152.615,68.462-152.615,152.615v64H64
                                                c-35.29,0-64,28.71-64,64s28.71,64,64,64h73.846c51.577,0,93.539-41.961,93.539-93.538v-98.462
                                                c0-13.573,11.042-24.615,24.615-24.615s24.615,11.042,24.615,24.615v98.462c0,51.577,41.961,93.538,93.539,93.538H448
                                                c35.29,0,64-28.71,64-64S483.29,300.308,448,300.308z M448,398.769h-73.846c-35.29,0-64-28.71-64-64v-98.462
                                                c0-29.86-24.293-54.154-54.154-54.154s-54.154,24.293-54.154,54.154v98.462c0,35.29-28.71,64-64,64H64
                                                c-19.002,0-34.462-15.459-34.462-34.462c0-19.002,15.459-34.462,34.462-34.462h9.846v24.615c0,8.157,6.613,14.769,14.769,14.769
                                                c8.157,0,14.769-6.613,14.769-14.769v-24.615h4.923c13.573,0,24.615-11.042,24.615-24.615v-34.462h24.615
                                                c8.157,0,14.769-6.613,14.769-14.769c0-8.157-6.613-14.769-14.769-14.769h-24.615v-4.923c0-23.557,6.658-45.587,18.183-64.315
                                                l10.904,10.904c2.884,2.884,6.664,4.326,10.443,4.326c3.779,0,7.56-1.442,10.443-4.326c5.768-5.767,5.768-15.119,0-20.887
                                                l-13.279-13.279c18.932-18.676,43.867-31.276,71.614-34.61v23.726c0,8.157,6.613,14.769,14.769,14.769s14.769-6.613,14.769-14.769
                                                V114.12c27.747,3.334,52.682,15.934,71.614,34.61l-13.28,13.279c-5.768,5.767-5.768,15.119,0,20.887
                                                c2.884,2.884,6.664,4.326,10.443,4.326s7.56-1.442,10.443-4.326l10.904-10.904c11.527,18.728,18.185,40.758,18.185,64.315v4.923
                                                h-24.615c-8.157,0-14.769,6.613-14.769,14.769c0,8.157,6.613,14.769,14.769,14.769h24.615v34.462
                                                c0,13.573,11.042,24.615,24.615,24.615H448c19.002,0,34.462,15.459,34.462,34.462C482.462,383.31,467.002,398.769,448,398.769z"/>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <path d="M457.769,372.706c-0.041-0.482-0.12-0.965-0.219-1.439c-0.09-0.472-0.207-0.945-0.346-1.398
                                                c-0.147-0.463-0.305-0.924-0.492-1.369c-0.186-0.443-0.393-0.876-0.62-1.3c-0.225-0.432-0.472-0.846-0.738-1.25
                                                c-0.266-0.394-0.551-0.788-0.857-1.162c-0.305-0.375-0.639-0.738-0.975-1.084c-0.345-0.335-0.709-0.67-1.083-0.975
                                                c-0.374-0.305-0.768-0.591-1.162-0.856c-0.404-0.267-0.817-0.513-1.251-0.738c-0.423-0.226-0.857-0.433-1.299-0.621
                                                c-0.443-0.186-0.907-0.345-1.36-0.492c-0.463-0.138-0.934-0.256-1.408-0.354c-0.472-0.089-0.955-0.167-1.438-0.218
                                                c-0.955-0.098-1.94-0.098-2.905,0c-0.472,0.05-0.955,0.129-1.428,0.218c-0.472,0.098-0.945,0.217-1.408,0.354
                                                c-0.453,0.148-0.916,0.306-1.359,0.492c-0.443,0.187-0.886,0.394-1.31,0.621c-0.423,0.225-0.837,0.472-1.241,0.738
                                                c-0.404,0.266-0.788,0.551-1.162,0.856c-0.375,0.306-0.738,0.64-1.084,0.975c-0.335,0.346-0.67,0.709-0.975,1.084
                                                c-0.305,0.374-0.591,0.767-0.856,1.162c-0.267,0.404-0.513,0.817-0.738,1.25c-0.226,0.424-0.433,0.857-0.621,1.3
                                                c-0.186,0.443-0.345,0.906-0.492,1.369c-0.138,0.453-0.256,0.926-0.354,1.398c-0.089,0.473-0.167,0.956-0.218,1.439
                                                c-0.046,0.482-0.066,0.965-0.066,1.447c0,0.482,0.02,0.975,0.068,1.456c0.05,0.473,0.129,0.956,0.218,1.428
                                                c0.098,0.473,0.217,0.945,0.353,1.408c0.148,0.453,0.306,0.917,0.492,1.36c0.187,0.442,0.394,0.876,0.621,1.299
                                                c0.225,0.433,0.472,0.847,0.738,1.251c0.266,0.393,0.551,0.788,0.856,1.162c0.306,0.374,0.64,0.738,0.975,1.083
                                                c0.346,0.336,0.709,0.671,1.084,0.975c0.374,0.306,0.767,0.592,1.162,0.857c0.404,0.267,0.817,0.513,1.25,0.738
                                                c0.424,0.226,0.857,0.433,1.3,0.62c0.443,0.187,0.906,0.346,1.359,0.492c0.463,0.139,0.935,0.256,1.408,0.354
                                                c0.473,0.089,0.956,0.167,1.428,0.217c0.482,0.049,0.975,0.069,1.457,0.069s0.964-0.021,1.447-0.069
                                                c0.483-0.048,0.965-0.128,1.438-0.217c0.473-0.099,0.945-0.217,1.408-0.354c0.453-0.147,0.917-0.305,1.36-0.492
                                                c0.442-0.186,0.876-0.393,1.299-0.62c0.433-0.225,0.847-0.472,1.251-0.738c0.393-0.266,0.788-0.551,1.162-0.857
                                                c0.374-0.305,0.738-0.639,1.083-0.975c0.336-0.345,0.671-0.709,0.975-1.083c0.306-0.374,0.592-0.768,0.857-1.162
                                                c0.267-0.404,0.513-0.817,0.738-1.251c0.226-0.423,0.433-0.857,0.62-1.299c0.187-0.443,0.346-0.907,0.492-1.36
                                                c0.139-0.463,0.256-0.934,0.346-1.408c0.099-0.472,0.177-0.955,0.217-1.428c0.049-0.482,0.079-0.974,0.079-1.456
                                                C457.848,373.671,457.819,373.189,457.769,372.706z"/>
                                        </g>
                                    </g>
                                    </svg>
                                <p>Vermifuge</p>
                            </Link>
                        </div>
                    </div>
                    <div className="pet-details-content-infos-avatar">
                        <img src={pet.avatarUrl} alt="profile avatar" />
                    </div>
                    <Modal show={showDeletePetModal} onHide={handleShowDeletePetModal} className="modal-delete-pet">
                        <Modal.Header closeButton>
                            <Modal.Title>Supprimer cet animal?</Modal.Title>
                        </Modal.Header>
                        <Modal.Footer>
                            <button
                                type="button"
                                className="modal-delete-cancel-btn"
                                variant="secondary"
                                onClick={handleCloseDeletePetModal}>
                                Annuler
                            </button>
                            <button
                                type="button"
                                className="modal-delete-validate-btn"
                                variant="primary"
                                onClick={handleDeletePet}>
                                Oui, supprimer
                            </button>
                        </Modal.Footer>
                    </Modal>
                    <div className="pet-details-content-infos-general">
                        <div className="pet-details-name">
                            <h3>Nom:</h3>
                            <p>{pet.name}</p>
                        </div>
                        <div className="pet-details-age">
                            <h3>Age:</h3>
                            <p>{pet.age}</p>
                        </div>
                        <div className="pet-details-species">
                            <h3>Espèce:</h3>
                            <p>{pet.species}</p>
                        </div>
                        <div className="pet-details-breed">
                            <h3>Race:</h3>
                            <p>{pet.breed}</p>
                        </div>
                        <div className="info-sex">
                            <h3>Sexe:</h3>
                            <p>{pet.sex}</p>
                        </div>
                        <div className="info-birthdate">
                            <h3>Date de naissance:</h3>
                            <p>{dayjs(pet.birthdate).format('DD/MM/YYYY')}</p>
                        </div>
                        <div className="info-ide">
                            <h3>Numéro d'identification:</h3>
                            <p>{pet.ide}</p>
                        </div>
                        <div className="edit-link">
                            <button type="button" className="edit-btn">
                                <Link to={`/pet/edit/${params.petId}`}>Editer</Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

PetDetails.propTypes = {
    pet: PropTypes.shape({
        _id: PropTypes.string.isRequired,
        avatarUrl: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        age: PropTypes.string.isRequired,
        species: PropTypes.string.isRequired,
        breed: PropTypes.string,
        sex: PropTypes.string.isRequired,
        birthdate: PropTypes.string.isRequired,
        ide: PropTypes.string,
        weight: PropTypes.arrayOf(
            PropTypes.shape({}),
        ).isRequired,
        deworming: PropTypes.arrayOf(
            PropTypes.shape({}),
        ).isRequired,
        vaccine: PropTypes.arrayOf(
            PropTypes.shape({}),
        ).isRequired,
        antiflea: PropTypes.arrayOf(
            PropTypes.shape({}),
        ).isRequired,
    }).isRequired,
    saveCurrentPet: PropTypes.func.isRequired,
    deletePet: PropTypes.func.isRequired,
    deletePetOnScreen: PropTypes.func.isRequired,
    savePetToDelete: PropTypes.func.isRequired,
};

PetDetails.defaultProps = {
    breed: '',
    ide: '',
}

export default PetDetails;
