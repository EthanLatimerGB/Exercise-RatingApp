import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { RepositoryListContainer } from '../components/repositoryList';
import { suffixConverter } from '../components/repositoryItem'

describe('RepositoryList', () => {
    describe('RepositoryListContainer', () => {
        it('renders repository information correctly', () => {
            const repositories = [
                {
                    id: 'jaredpalmer.formik',
                    fullName: 'jaredpalmer/formik',
                    description: 'Build forms in React, without the tears',
                    language: 'TypeScript',
                    forksCount: 1619,
                    stargazersCount: 21856,
                    ratingAverage: 88,
                    reviewCount: 3,
                    ownerAvatarUrl:
                        'https://avatars2.githubusercontent.com/u/4060187?v=4',
                },
                {
                    id: 'async-library.react-async',
                    fullName: 'async-library/react-async',
                    description: 'Flexible promise-based React data loader',
                    language: 'JavaScript',
                    forksCount: 69,
                    stargazersCount: 1760,
                    ratingAverage: 72,
                    reviewCount: 3,
                    ownerAvatarUrl:
                        'https://avatars1.githubusercontent.com/u/54310907?v=4',
                },
            ];
  
            
            const { getAllByTestId } = render(<RepositoryListContainer repositories={repositories} loading={false} error={null} />);

            //renders titles
            expect(getAllByTestId('repoItem-fullnane')[0]).toHaveTextContent('jaredpalmer/formik');
            expect(getAllByTestId('repoItem-fullnane')[1]).toHaveTextContent('async-library/react-async');

            //renders descriptions
            expect(getAllByTestId('repoItem-description')[0]).toHaveTextContent('Build forms in React, without the tears');
            expect(getAllByTestId('repoItem-description')[1]).toHaveTextContent('Flexible promise-based React data loader');

            //renders language
            expect(getAllByTestId('repoItem-language')[0]).toHaveTextContent('TypeScript');
            expect(getAllByTestId('repoItem-language')[1]).toHaveTextContent('JavaScript');

            //renders forksCount
            expect(getAllByTestId('repoItem-forksCount')[0]).toHaveTextContent(suffixConverter('1619'));
            expect(getAllByTestId('repoItem-forksCount')[1]).toHaveTextContent(suffixConverter('69'));

            //renders stargazersCOunt
            expect(getAllByTestId('repoItem-stargazersCount')[0]).toHaveTextContent(suffixConverter('21856'));
            expect(getAllByTestId('repoItem-stargazersCount')[1]).toHaveTextContent(suffixConverter('1760'));

            //renders ratingAverage
            expect(getAllByTestId('repoItem-ratingAverage')[0]).toHaveTextContent(suffixConverter('88'));
            expect(getAllByTestId('repoItem-ratingAverage')[1]).toHaveTextContent(suffixConverter('72'));

            //renders reviewCount
            expect(getAllByTestId('repoItem-reviewCount')[0]).toHaveTextContent(suffixConverter('3'));
            expect(getAllByTestId('repoItem-reviewCount')[1]).toHaveTextContent(suffixConverter('3'));

      });
    });
  });
