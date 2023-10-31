# Star Wars Finder

A comprehensive search API designed to explore and discover various resources from the Star Wars universe. Utilizing the power of SWAPI, you can now delve into the intricate details of people, films, starships, vehicles, species, and planets.

[screen-capture (1).webm](https://github.com/tjuandev/star-wars-finder/assets/67200208/f9c63b30-d142-4760-8b0e-b42f2f946d75)

## Table of Contents

1. [Setup](#setup)
  - [Running the Project Locally](#running-the-project-locally)
  - [Running Storybook](#running-storybook)
  - [Testing](#testing)
      - [Running Tests](#running-tests)
      - [Coverage Reports](#coverage-reports)
2. [Technical Highlights](#technical-highlights-bulb)

## Setup

1. Ensure you have yarn installed. If not, you can get it [here](https://classic.yarnpkg.com/en/docs/install/).
2. Clone the repository to your local machine.
3. Navigate to the project directory.
4. For the v1 version, install the project dependencies using the following command:

   ```
   yarn install
   ```

#### Running the Project Locally

After setting up, you can run the project on your local machine using the following command:

```
yarn dev
```

#### Running Storybook

```
yarn storybook
```

#### Testing

#### Running Tests

To run the tests, use the following command:

```
yarn test
```

### Coverage Reports

If you wish to view the test coverage, use:

```
yarn test:c
```

---


## Technical Highlights :bulb:

- :atom_symbol: **Atomic Design**: We've structured our components based on the principles of Atomic Design, ensuring modularity and reusability.
  
- :art: **SASS**: For improved performance and easier maintenance, we've employed SASS for styling.
  
- :book: **Storybook**: Every component is attached with its respective Storybook, allowing for easier visualization and testing.
  
- :file_folder: **Library (lib) Folder**: A dedicated `lib` folder has been established to perform dependency inversion, particularly for the React Query and Axios libraries.
  
- :gear: **Redux**: 
  - :link: **Dependency Inversion**: Both dispatch and get actions in Redux slices are consumed through an intermediary hook, ensuring flexibility and maintainability.
  - :floppy_disk: **Redux Persist**: Integration with Redux Persist to maintain the state even after page refreshes.

##### Testing :test_tube:

- :bar_chart: **Coverage**: Over 90% of the codebase is covered by tests, ensuring reliability and stability across the platform.

##### Project Setup :wrench:

- :no_entry_sign: **ESLint**: The project is already set up with ESLint, ensuring consistent code quality and adhering to best practices.

##### Design and Usability :iphone:

- :mobile_phone_off: **Responsiveness**: The application is fully responsive, providing an optimized experience across various devices.
  
- :wheelchair: **Accessibility**: Committed to inclusive design, special attention has been given to ensure the platform is accessible to all users, regardless of their abilities.



Thank you for exploring the Star Wars Finder. May the Force be with you in your search endeavors!
