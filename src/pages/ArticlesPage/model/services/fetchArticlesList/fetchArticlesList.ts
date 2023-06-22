import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article } from 'entities/Article';

export const fetchArticlesList = 
createAsyncThunk<Array<Article>, void, ThunkConfig<string>>(
    'pages/fetchArticlesList',
    async (_ , { rejectWithValue, extra }) => {
        try {
            const response = await extra.api.get<Array<Article>>('/articles', { params: {
                _expand:'user'
            }});

            if(!response.data) return rejectWithValue('Error');
            return response.data;
        } catch (error) {
            return rejectWithValue('Error');
     
        }
    
    }
);