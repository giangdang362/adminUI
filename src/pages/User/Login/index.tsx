import { login } from '@/services/auth';
import { setToken } from '@/utils/auth';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { LoginForm, ProFormCheckbox, ProFormText } from '@ant-design/pro-components';
import { FormattedMessage, history, useIntl, useModel } from '@umijs/max';
import { message } from 'antd';
import { CheckboxChangeEvent } from 'antd/es/checkbox';
import React, { useState } from 'react';
import { flushSync } from 'react-dom';
import loginLogo from './../../../../public/images/logo-login.png';
import './index.css';

// const ActionIcons = () => {
//   const langClassName = useEmotionCss(({ token }) => {
//     return {
//       marginLeft: '8px',
//       color: 'rgba(0, 0, 0, 0.2)',
//       fontSize: '24px',
//       verticalAlign: 'middle',
//       cursor: 'pointer',
//       transition: 'color 0.3s',
//       '&:hover': {
//         color: token.colorPrimaryActive,
//       },
//     };
//   });

//   return (
//     <>
//       <AlipayCircleOutlined key="AlipayCircleOutlined" className={langClassName} />
//       <TaobaoCircleOutlined key="TaobaoCircleOutlined" className={langClassName} />
//       <WeiboCircleOutlined key="WeiboCircleOutlined" className={langClassName} />
//     </>
//   );
// };

// const Lang = () => {
//   const langClassName = useEmotionCss(({ token }) => {
//     return {
//       width: 42,
//       height: 42,
//       lineHeight: '42px',
//       position: 'fixed',
//       right: 16,
//       borderRadius: token.borderRadius,
//       ':hover': {
//         backgroundColor: token.colorBgTextHover,
//       },
//     };
//   });

//   return (
//     <div className={langClassName} data-lang>
//       {SelectLang && <SelectLang />}
//     </div>
//   );
// };

const Login: React.FC = () => {
  // const [userLoginState, setUserLoginState] = useState<API.LoginResult>({});
  const [loginParams, setLoginParams] = useState<API.Login>({
    email: '',
    password: '',
    // autoLogin: true,
    // remember: true,
  });
  const [type, setType] = useState<string>('account');
  const { initialState, setInitialState } = useModel('@@initialState');

  const onChangeRememberMe = (e: CheckboxChangeEvent) => {
    setLoginParams({ ...loginParams, remember: e.target.checked ? 1 : 0 });
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  const intl = useIntl();

  const handleSubmit = async (values: API.Login) => {
    try {
      // 登录
      const user = await login({ ...values });
      if (user) {
        setToken({
          accessToken: user?.jwtToken,
          refreshToken: user?.refreshToken,
        });
        const defaultLoginSuccessMessage = intl.formatMessage({
          id: 'pages.login.success',
          defaultMessage: 'Login successfull!',
        });
        message.success(defaultLoginSuccessMessage);
        flushSync(() => {
          setInitialState((s: any) => ({
            ...s,
            currentUser: user,
          }));
        });
        const urlParams = new URL(window.location.href).searchParams;
        history.push(urlParams.get('redirect') || '/');
        return;
      }
    } catch (error) {
      const defaultLoginFailureMessage = intl.formatMessage({
        id: 'pages.login.failure',
        defaultMessage: 'Login failed, please try again!',
      });
      console.log(error);
      message.error(defaultLoginFailureMessage);
    }
  };
  // const { status, type: loginType } = userLoginState;

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div style={{ width: '50%' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div style={{ width: '50%' }} className="login-block">
            {/* <LoginMessage content='' /> */}
            <LoginForm<API.Login>
              title="Welcome Back!"
              initialValues={{ remember: true }}
              onFinish={async (values) => {
                await handleSubmit(values);
              }}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
              submitter={{ searchConfig: { submitText: 'Login' } }}
            >
              <div style={{ marginTop: 12 }}>
                <p style={{ marginBottom: '8px', fontSize: '14px' }}>Email</p>
                <ProFormText
                  name="email"
                  fieldProps={{
                    size: 'large',
                    prefix: <UserOutlined />,
                  }}
                  placeholder={intl.formatMessage({
                    id: 'pages.login.email.placeholder',
                    defaultMessage: 'admin or user',
                  })}
                  rules={[
                    {
                      required: true,
                      message: (
                        <FormattedMessage
                          id="pages.login.email.required"
                          defaultMessage="Please enter email!"
                        />
                      ),
                    },
                  ]}
                />
                <p style={{ marginBottom: '8px', fontSize: '14px' }}>Password</p>
                <ProFormText.Password
                  name="password"
                  fieldProps={{
                    size: 'large',
                    prefix: <LockOutlined />,
                  }}
                  placeholder={intl.formatMessage({
                    id: 'pages.login.password.placeholder',
                    defaultMessage: 'admin/user',
                  })}
                  rules={[
                    {
                      required: true,
                      message: (
                        <FormattedMessage
                          id="pages.login.password.required"
                          defaultMessage="Please enter password!"
                        />
                      ),
                    },
                  ]}
                />
                <ProFormCheckbox name="remember" valuePropName="checked">
                  Remember me
                </ProFormCheckbox>
              </div>
            </LoginForm>
          </div>
        </div>
      </div>
      <div
        style={{
          width: '50%',
          backgroundColor: '#F5F5F5',
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <img src={loginLogo} alt="Login Logo" />
      </div>
    </div>
  );
};

export default Login;
