import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import categoryApi from "../../../../api/categoryApi";
import './style.css'

FormFilter.propTypes = {
  filterChange: PropTypes.func,
};

FormFilter.defaultProps = {
  filterChange: null,
};

function FormFilter(props) {
  const { filterChange } = props;
  const [catalogs, setCatalogs] = useState([]);

  useEffect(() => {
    const fetchCatalogs = async () => {
      const catalogsList = await categoryApi.getAll();
      setCatalogs(catalogsList);
    };
    fetchCatalogs();
  }, []);

  function handleClick(idCatalog) {
    if (!filterChange) return;
    filterChange(+idCatalog);
  }

  return (
    <div className='form-filter'>
      <ul>
        <li onClick={() => handleClick(0)}>Tất cả</li>
        {catalogs.map((cata) => (
            <li key={cata.id} onClick={() => handleClick(cata.id)}>
              {cata.nameCatalog}
            </li>
        ))}
      </ul>
    </div>
  );
}

export default FormFilter;
