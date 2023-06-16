import express, { Router } from "express";
import { addReview, getReviews, getReviewsByPark } from '../controllers/reviews.controllers';

const reviewsRouter: Router = express.Router();

reviewsRouter.route('/').get(getReviews);
reviewsRouter.route('/:park_id').get(getReviewsByPark);
reviewsRouter.route('/').post(addReview);

export default reviewsRouter;