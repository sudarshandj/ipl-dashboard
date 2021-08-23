import {React, useEffect , useState} from 'react';
import {useParams} from 'react-router-dom';
import {MatchDetailCard} from "../componets/MatchDetailCard";
import {MatchSmallCard} from "../componets/MatchSmallCard";

export const MatchPage = () => {

    const[matches, setMatches] = useState([]);
    const{teamName, year} = useParams();
    useEffect(
        () => {
            const fetchMatches = async () =>{
                const response = await fetch(`http://localhost:8080/team/${teamName}/matches?year=${year}`);
                const data = await response.json();
                console.log(data);
                setMatches(data);
            };
            fetchMatches();
        },[]
    );

    return (
        <div className="MatchPage">
            <h1>Match Page</h1>
            {
                matches.map(match => <MatchDetailCard key={match.id} teamName={teamName} match={match}/>)
            }
        </div>
    );
}