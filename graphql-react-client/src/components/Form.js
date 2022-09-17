import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { CREATE_BIRD_MUTATION } from '../graph-ql/Mutations';

// TODO: Seperate concerns (business/presentation concerns)
// TODO: Create dumb components
// TODO: Come up with integration tests and unit tests
// TODO: Convert project to ts
// TODO: Add react query (caching/fetching) and use it with graphql for basic state management
// TODO: Investigate why error is not very descriptive and how it can be improved (EG, pass string in lieue of int)
// TODO: Read up on CORS

function Form() {
  const [commonName, setCommonName] = useState('');
  const [latinName, setLatinName] = useState('');
  const [birdFamily, setBirdFamily] = useState('');
  const [ukConservationStatus, setUKConservationStatus] = useState('');
  const [ukPopulation, setUKPopulation] = useState(1);

  const [createBird, { error }] = useMutation(CREATE_BIRD_MUTATION);

  const makeSomeChangesOnTestBranc = () => {
    console.log("I'm making some changes");
  };

  const addBird = (e) => {
    e.preventDefault();

    createBird({
      variables: {
        common_name: commonName,
        latin_name: latinName,
        bird_family: birdFamily,
        uk_conservation_status: ukConservationStatus,
        uk_population: parseInt(ukPopulation, 10),
      },
    });

    if (error) {
      // !important, error here is not descriptive, eg, doesn't tell me if type is wrong
      console.error(`****** error ******: ${error}`);
    }
  };

  return (
    <form>
      <fieldset>
        <label>Common Name</label>
        <input type='text' placeholder='Common Name' onChange={(e) => setCommonName(e.target.value)} />
      </fieldset>
      <fieldset>
        <label>Latin Name</label>
        <input type='text' placeholder='Latin Name' onChange={(e) => setLatinName(e.target.value)} />
      </fieldset>
      <fieldset>
        <label>Bird Family</label>
        <input type='text' placeholder='Bird Family' onChange={(e) => setBirdFamily(e.target.value)} />
      </fieldset>
      <fieldset>
        <label>UK Conservation Status</label> {/* // TODO: Change to select/option */}
        <input
          type='text'
          placeholder='UK Conservation Status'
          onChange={(e) => setUKConservationStatus(e.target.value)}
        />
      </fieldset>
      <fieldset>
        <label>UK Population</label>
        <input type='number' placeholder='UK Population' onChange={(e) => setUKPopulation(e.target.value)} />
      </fieldset>
      <button onClick={addBird}>Add Bird</button>
    </form>
  );
}

export default Form;
