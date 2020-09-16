import {
    API_BASE_URL,
    BEARER_TOKEN
} from './config';
import queryString from 'query-string'

export function get(path, queryParams) {
    const query = queryString.stringify(queryParams);
    return fetch(`${API_BASE_URL}${path}?${query}`, {
            headers: {
                Authorization: `Bearer ${BEARER_TOKEN}`,
                Origin: 'localhost',
                withCredentials: true,
            },
            body: JSON.stringify(data),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}

const query = queryString.stringify(queryParams);
class Header extends React.Component {
    constructor(props) {
      super(props);
    } 
    componentDidUpdate() {
        fetch(`${API_BASE_URL}${path}?${query}`, {
            headers: {
                Authorization: `Bearer ${BEARER_TOKEN}`,
                Origin: 'localhost',
                withCredentials: true,
            },
            body: JSON.stringify(data),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
      }

}

export default Header