import React, { useState, useEffect } from 'react';
import {
    Container,
    CategoryArea,
    CategoryList,
    RecipeArea,
    RecipeList
} from './styled';
import api from '../../api'
import Header from '../../components/Header'
import CategoryItem from '../../components/CategoryItem';
import RecipeItem from '../../components/RecipeItem';
import ReactTooltip from 'react-tooltip';
import Modal from '../../components/Modal'
import ModalRecipe from '../../components/ModalRecipe'

let searchTimer = null;

export default () => {
    const [headerSearch, setHeaderSearch] = useState('');
    const [categories, setCategories] = useState([]);
    const [recipes, setRecipes] = useState([]);
    const [activeCategory, setActiveCategory] = useState(0);
    const [activeCategoryName, setActiveCategoryName] = useState('Todas as categorias');
    const [activeSearch, setActiveSearch] = useState('');
    const [modalStatus, setModalStatus] = useState(false);
    const [modalData, setModalData] = useState({});

    const getRecipes = async () => {
        const rec = await api.getRecipes(activeSearch, activeCategoryName);
        setRecipes(rec.meals)
    }

    useEffect(() => {
        clearTimeout(searchTimer);
        searchTimer = setTimeout(() => {
            setActiveSearch(headerSearch);
        }, 2000)

    }, [headerSearch]);

    useEffect(() => {
        const getCategories = async () => {
            const cat = await api.getCategories();
            setCategories(cat.categories);
            ReactTooltip.rebuild()

        };
        getCategories();
    }, []);

    useEffect(() => {
        setRecipes([]);
        getRecipes();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [activeCategory, activeSearch]);

    const handleRecipeClick = (data) => {
        setModalData(data);
        setModalStatus(true);
    }

    return (
        <Container>
            <Header search={headerSearch} onSearch={setHeaderSearch} />
            {categories.length > 0 &&

                <CategoryArea>
                    Categoria selecionada: {activeCategoryName}
                    <CategoryList>
                        <CategoryItem
                            data={{
                                idCategory: 0,
                                strCategory: 'Todas as categorias',
                                strCategoryThumb: '/assets/openbook.png'
                            }}
                            activeCategory={activeCategory}
                            activeCategoryName={activeCategoryName}
                            setActiveCategory={setActiveCategory}
                            setActiveCategoryName={setActiveCategoryName}
                        />

                        {categories.map((item, index) => (
                            <CategoryItem
                                key={index}
                                data={item}
                                activeCategory={activeCategory}
                                activeCategoryName={activeCategoryName}
                                setActiveCategory={setActiveCategory}
                                setActiveCategoryName={setActiveCategoryName}
                            />
                        ))}
                    </CategoryList>
                </CategoryArea>
            }
            {recipes.length > 0 &&
                <RecipeArea>
                    <RecipeList>
                        {recipes.map((item, index) => (
                            <RecipeItem
                                key={index}
                                data={item}
                                onClick={handleRecipeClick}
                            />
                        ))}
                    </RecipeList>
                </RecipeArea>
            }

            <Modal status={modalStatus} setStatus={setModalStatus} >
                <ModalRecipe data={modalData} />
            </Modal>

        </Container>
    );

}