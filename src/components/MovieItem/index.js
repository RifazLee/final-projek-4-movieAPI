import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchData } from "../../features/detailSlice";
const MovieItem = ({
  title,
  idm,
  Image,
  Year,
  Type,
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();


  const navigateToDetails = (id) => {
    dispatch(fetchData({ id }));
    navigate(`/movie/${id}`, { replace: true });
  };
  return (
    <div className="main-container">
      <div className="poster-container">
        <img src={Image} className="poster" alt={title} />
      </div>
      <div className="ticket-container">
        <div className="ticket__content">
          <h4 className="ticket__movie-title">{title}</h4>
          <p className="ticket__movie-slogan">
            {Type}, release {Year}.
          </p>
          <button className="ticket__buy-btn" onClick={() => navigateToDetails(idm)}
          >Detail</button>
        </div>
      </div>
    </div>
  )
};

export default MovieItem;
