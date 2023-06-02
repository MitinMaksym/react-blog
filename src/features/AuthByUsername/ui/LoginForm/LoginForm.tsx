import { FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { BtnVariant, Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { DynamicModuleLoader, 
    ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import { selectLoginUsername } from '../../model/selectors/selectLoginUsername/selectLoginUsername';
import { selectLoginPassword} from '../../model/selectors/selectLoginPassword/selectLoginPassword';
import { selectLoginLoading} from '../../model/selectors/selectLoginLoading/selectLoginLoading';
import { selectLoginError} from '../../model/selectors/selectLoginError/selectLoginError';

import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string
    onSuccess: () => void
}
const asyncReducers:ReducersList= {
    loginForm:loginReducer,
};

const LoginForm: FC<LoginFormProps> = ({ className, onSuccess }) => {
    const {t} = useTranslation();
    const dispatch = useAppDispatch();
    const username = useSelector(selectLoginUsername);
    const password = useSelector(selectLoginPassword);
    const error = useSelector(selectLoginError);
    const loading = useSelector(selectLoginLoading);
    
    const handleUsernameChange = useCallback((name: string) => 
        dispatch(loginActions.setUsername(name)), [dispatch]);

    const handlePasswordChange = useCallback((ps: string) => 
        dispatch(loginActions.setPassword(ps)), [dispatch]);

    const handleSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const result = await dispatch(loginByUsername({username, password}));
        if(result.meta.requestStatus === 'fulfilled'){onSuccess();}
    }, [dispatch, password, username, onSuccess]);

 
    return <DynamicModuleLoader reducers={asyncReducers} removeAfterUnmount> 
        <form 
            className={classNames(cls.loginForm, {}, [className])}
            onSubmit={handleSubmit}>
            <Text title={t('login-form')}/>
            {error && <Text text={error} theme={TextTheme.ERROR}/>}
            <Input
                id='username'
                label='Username'
                className={cls.input} 
                value={username} 
                onChange={handleUsernameChange}/>       
            <Input
                type="password"
                id='password' 
                label='Password'
                className={cls.input} 
                value={password} 
                onChange={handlePasswordChange}/> 
            <Button 
                className={cls.button}  
                variant={BtnVariant.BACKGROUND_INVERTED}
                disabled={loading}>
                {t('sign-in')}
            </Button>      
        </form>
    </DynamicModuleLoader>;
};

export default LoginForm;