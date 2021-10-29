/* eslint-disable no-console */
/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react'
import dayjs from 'dayjs'
import { Link, useParams, useHistory } from 'react-router-dom'
import { Modal } from 'react-bootstrap'
import PropTypes from 'prop-types'

import cancelIcon from '../../../assets/icons/close.png'
//import Weight from '../../../assets/icons/weight-scale.svg';
import WeightDetails from '../../../containers/WeightDetails';
import VaccineDetails from '../../../containers/VaccineDetails';
import AntifleaDetails from '../../../containers/AntifleaDetails';
import DewormingDetails from '../../../containers/DewormingDetails';

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
	const [showWeight, setShowWeight] = useState(true)
	const [showVaccine, setShowVaccine] = useState(false)
	const [showDeletePetModal, setShowDeletePetModal] = useState(false)
	const [showAntiflea, setShowAntiflea] = useState(false)
	const [showDeworming, setShowDeworming] = useState(false)

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

	const toggleShowWeight = () => {
    if (showVaccine === false && showDeworming === false && showAntiflea === false) {
      setShowWeight(true)
    } else {
      setShowWeight(!showWeight)
      setShowVaccine(false)
      setShowAntiflea(false)
      setShowDeworming(false)
    }
	}

	const toggleShowVaccine = () => {
    if (showWeight === false && showDeworming === false && showAntiflea === false) {
      setShowVaccine(true)
    } else {
      setShowVaccine(!showVaccine)
      setShowWeight(false)
      setShowAntiflea(false)
      setShowDeworming(false)
    }
	}

	const toggleShowAntiflea = () => {
    if (showWeight === false && showDeworming === false && showVaccine === false) {
      setShowAntiflea(true)
    } else {
		setShowAntiflea(!showAntiflea)
		setShowWeight(false)
		setShowVaccine(false)
		setShowDeworming(false)
    }
	}

	const toggleShowDeworming = () => {
    if (showWeight === false && showAntiflea === false && showVaccine === false) {
      setShowDeworming(true)
    } else {
		setShowDeworming(!showDeworming)
		setShowWeight(false)
		setShowVaccine(false)
		setShowAntiflea(false)
    }
	}

	return (
		<div className={showDetails ? 'pet-details' : 'pet-details-hidden'}>
			<div className="details-links">
				<div className="details-links-item">
					<button onClick={toggleShowWeight} className="details-links-item-btn">
						<svg id="Image" className="btn-icon" height="512" viewBox="0 0 64 64" width="512" xmlns="http://www.w3.org/2000/svg"><g>
							<path d="m52 7h-40c-2.757 0-5 2.243-5 5v40c0 2.757 2.243 5 5 5h40c2.757 0 5-2.243 5-5v-40c0-2.757-2.243-5-5-5zm3 45c0 1.654-1.346 3-3 3h-40c-1.654 0-3-1.346-3-3v-40c0-1.654 1.346-3 3-3h40c1.654 0 3 1.346 3 3z"/><path d="m32 12c-5.876 0-11.808 2.789-15.595 7.792-.993 1.315-.062 3.208 1.588 3.208h28.014c1.644 0 2.586-1.888 1.586-3.21-3.726-4.922-9.61-7.79-15.593-7.79zm1.388 8.999 1.56-4.682c.418-1.252-1.476-1.891-1.896-.633l-1.772 5.315-13.28-.001c.857-1.132 1.844-2.144 2.927-3.025l.571.786c.778 1.069 2.397-.105 1.618-1.176l-.569-.783c.982-.63 2.024-1.158 3.108-1.583l.296.911c.41 1.262 2.312.644 1.902-.618l-.298-.916c1.122-.299 2.275-.493 3.444-.562v.968c0 1.322 2 1.324 2 0v-.97c1.169.069 2.322.263 3.444.562l-.298.916c-.41 1.262 1.491 1.88 1.902.618l.296-.91c1.083.425 2.126.953 3.107 1.584l-.568.782c-.789 1.084.851 2.231 1.617 1.176l.57-.784c1.083.882 2.07 1.894 2.927 3.026z"/></g>
						</svg>
						Poids
					</button>
				</div>
				<div className="details-links-item">
					<button onClick={toggleShowVaccine} className="details-links-item-btn">
						<svg className="btn-icon" height="512" viewBox="0 0 128 128" width="512" xmlns="http://www.w3.org/2000/svg"><g><path d="m17.107 88.6c-2.209-.163-3.9 2.2-5.312 3.532a4.3 4.3 0 0 0 0 6.085l15.779 15.783a4.318 4.318 0 0 0 6.085 0l2.271-2.27a4.319 4.319 0 0 0 0-6.086l-1.243-1.244 3.735-3.735 5.042 5.042a5.9 5.9 0 0 0 8.514-8.159l40.956-40.956c4.428-4.306 1.587-10.585-1.294-14.955l3.294-4.318a1.749 1.749 0 0 0 -.155-2.3l-.767-.768 18.524-18.524a1.75 1.75 0 0 0 -2.475-2.474l-18.526 18.528-.763-.767a1.746 1.746 0 0 0 -2.3-.157l-4.307 3.282c-4.313-2.83-10.7-5.732-14.971-1.268-11.462 11.46-25.494 25.496-36.975 36.975l-3.966 3.966a5.9 5.9 0 0 0 -8.168 8.513l5.053 5.053-3.738 3.736c-1.12-1.214-2.5-2.614-4.293-2.514zm72.266-54.03 1.85 1.843-1.771 2.322a22.691 22.691 0 0 0 -2.4-2.4zm-55.473 38.548a35.849 35.849 0 0 1 10.98 7.323 1.75 1.75 0 1 0 2.451-2.5 38.767 38.767 0 0 0 -10.781-7.475l7.791-7.79a35.294 35.294 0 0 1 10.975 7.324 1.743 1.743 0 0 0 1.226.5 1.761 1.761 0 0 0 1.225-3 38.774 38.774 0 0 0 -10.78-7.474l7.79-7.79a35.316 35.316 0 0 1 10.98 7.322 1.75 1.75 0 0 0 2.451-2.5 38.764 38.764 0 0 0 -10.781-7.474l7.79-7.791a35.314 35.314 0 0 1 10.983 7.327 1.75 1.75 0 1 0 2.451-2.5 38.738 38.738 0 0 0 -10.78-7.474l3.8-3.8a4.511 4.511 0 0 1 4.519-1.146 23.088 23.088 0 0 1 15.4 15.37 4.558 4.558 0 0 1 -1.134 4.549l-40.935 40.934-18.784-18.776zm-11.34 6.733a2.419 2.419 0 0 1 1.7-4.1c1.14-.096 2.04 1.049 2.769 1.769l22.312 22.3a2.42 2.42 0 0 1 .008 3.405 2.486 2.486 0 0 1 -3.41 0zm5.052 10 8.335 8.335-3.735 3.735-8.335-8.335zm3.364 15.784 2.479 2.478a.8.8 0 0 1 0 1.136l-2.27 2.27a.8.8 0 0 1 -1.136 0l-15.78-15.78a.794.794 0 0 1 0-1.135l2.27-2.27a.794.794 0 0 1 1.136 0z"/><path d="m117.468 38.973c0-2.666-3.536-9.592-4.62-11.651a1.763 1.763 0 0 0 -3.1 0c-1.084 2.059-4.621 8.985-4.621 11.651.29 8.162 12.051 8.166 12.341 0zm-8.839 0c0-.922 1.213-3.888 2.67-6.933 1.456 3.045 2.669 6.011 2.669 6.933a2.67 2.67 0 0 1 -5.339 0z"/></g>
						</svg>
						Vaccins
					</button>
				</div>
				<div className="details-links-item">
					<button onClick={toggleShowAntiflea} className="details-links-item-btn">
					<svg viewBox="0 0 60 60" width="512" xmlns="http://www.w3.org/2000/svg"><g id="Page-1" fill="none" fillRule="evenodd"><g id="042---Flea-Treatment" fill="rgb(0,0,0)" fillRule="nonzero"><path id="Shape" d="m48.434 1.6c-.7740297-1.46493211-2.5890643-2.02502296-4.054-1.251l-1.768.934c-.0244464.0175906-.0478213.03662443-.07.057-.022.014-.049.016-.069.032l-27.673 21.104c-1.1699918.8868604-1.5233435 2.4917717-.834 3.788l.614 1.161-12.981 7c-1.46397303.7743667-2.02349703 2.5885673-1.25 4.053l1.87 3.536c.77786632 1.4647933 2.59511738 2.0228115 4.061 1.247l12.974-7 1.052 1.99c.7024991 1.3207165 2.268541 1.9248099 3.676 1.418l32.526-11.809c.011 0 .019-.014.03-.018.032-.013.065-.021.1-.037l1.768-.936c1.46456-.7743853 2.0241751-2.5893288 1.25-4.054zm2.516 26.151-11.428-21.615 3.224-2.458 12 22.7zm-9.489 3.449-10-18.914 6.448-4.918 11.143 21.073zm-36.123 10.3c-.23443883.1241867-.50861782.1501243-.76218566.0721034-.25356785-.0780209-.46574016-.253605-.58981434-.4881034l-1.87-3.536c-.12454036-.2357066-.14981077-.5113837-.07019873-.7658043.07961204-.2544205.25751557-.4665214.49419873-.5891957l12.974-7 2.8 5.3zm17.962-3.707c-.4696512.1668216-.990715-.0346337-1.226-.474l-1.523-2.879-3.739-7.072-1.076-2.035c-.2292303-.4325803-.1115778-.9675183.278-1.264l13.834-10.555 9.714 18.373zm34.655-13.281c-.0773569.2539401-.2530756.4663869-.488.59l-.884.467-12.152-22.985.884-.468c.4882324-.25778161 1.0929963-.07111504 1.351.417l11.218 21.218c.1247981.2338702.1503814.5080802.071.761z"/><path id="Shape" d="m4.293 46.293c-.175.175-4.293 4.343-4.293 8.707 0 2.7614237 2.23857625 5 5 5s5-2.2385763 5-5c0-4.364-4.118-8.532-4.293-8.707-.39049985-.3903819-1.02350015-.3903819-1.414 0zm.707 11.707c-1.65685425 0-3-1.3431458-3-3 0-2.557 1.925-5.216 3-6.5 1.076 1.283 3 3.937 3 6.5 0 1.6568542-1.34314575 3-3 3z"/></g></g></svg>
						Anti-puces
					</button>
				</div>
				<div className="details-links-item">
				
					<button onClick={toggleShowDeworming} className="details-links-item-btn">
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
						Vermifuge
					</button>
				</div>
			</div>
			<div className="back-icon">
			</div>
			<div className="pet-details-section">
				<div className="pet-details-content">
					<div className="pet-details-content-infos">
						<div className="container-row">
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
								<h3>Nom :</h3>
								<p>{pet.name}</p>
							</div>
							<div className="pet-details-age">
								<h3>Age :</h3>
								<p>{pet.age}</p>
							</div>
							<div className="pet-details-species">
								<h3>Espèce :</h3>
								<p>{pet.species}</p>
							</div>
							<div className="pet-details-breed">
								<h3>Race :</h3>
								<p>{pet.breed}</p>
							</div>
							<div className="info-sex">
								<h3>Sexe :</h3>
								<p>{pet.sex}</p>
							</div>
							<div className="info-birthdate">
								<h3>Date de naissance :</h3>
								<p>{dayjs(pet.birthdate).format('DD/MM/YYYY')}</p>
							</div>
							<div className="info-ide">
								<h3>N° d'identification :</h3>
								<p>{pet.ide}</p>
							</div>
					
						</div>
            </div>
						<div className="controls">
                <Link to="/pet" className="back-link">Retour</Link>
								<div className="edit-link">
									<button type="button" className="edit-btn">
										<Link to={`/pet/edit/${params.petId}`}>Editer</Link>
									</button>
								</div>
								<div className="pet-delete">
									<button className="pet-delete-btn" type="button" onClick={handleShowDeletePetModal} title="Supprimer cet animal">
										Supprimer
									</button>
								</div>
							</div>
					</div>
				</div>
				<div className="pet-details-items">
					{showWeight ? (
						<div className="pet-details-items-weight">
						<WeightDetails pet={pet}/>
					</div>
					) : ''}
					{showVaccine ? (
							<div className="pet-details-items-vaccine">
							<VaccineDetails pet={pet}/>
						</div>
					) : ''}
					{showAntiflea ? (
								<div className="pet-details-items-antiflea">
								<AntifleaDetails pet={pet}/>
							</div>
						) : ''}
					{showDeworming ? (
								<div className="pet-details-items-deworming">
								<DewormingDetails pet={pet}/>
							</div>
						) : ''}
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
