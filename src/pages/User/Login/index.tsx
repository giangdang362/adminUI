import { login } from '@/services/ant-design-pro/api';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { LoginForm, ProFormCheckbox, ProFormText } from '@ant-design/pro-components';
import { FormattedMessage, history, useIntl, useModel } from '@umijs/max';
import { message } from 'antd';
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

// const LoginMessage: React.FC<{
//   content: string;
// }> = ({ content }) => {
//   return (
//     <Alert
//       style={{
//         marginBottom: 12,
//       }}
//       message={content}
//       type="error"
//       showIcon
//     />
//   );
// };

const Login: React.FC = () => {
  const [userLoginState, setUserLoginState] = useState<API.LoginResult>({});
  const [loginParams, setLoginParams] = useState<API.LoginParams>({
    username: '',
    password: '',
    autoLogin: true,
    remember: true,
  });
  const [type, setType] = useState<string>('account');
  const { initialState, setInitialState } = useModel('@@initialState');

  // const onChangeRememberMe = (e: CheckboxChangeEvent) => {
  //   setLoginParams({ ...loginParams, remember: e.target.checked });
  // };

  // const onFinishLogin = (values: API.LoginParams) => {
  //   console.log('Success:', values);
  // };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  // const containerClassName = useEmotionCss(() => {
  //   return {
  //     display: 'flex',
  //     flexDirection: 'column',
  //     height: '100vh',
  //     overflow: 'auto',
  //     backgroundImage:
  //       "url('https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/V-_oS6r-i7wAAAAAAAAAAAAAFl94AQBr')",
  //     backgroundSize: '100% 100%',
  //   };
  // });

  const intl = useIntl();

  const fetchUserInfo = async () => {
    const userInfo = await initialState?.fetchUserInfo?.();
    if (userInfo) {
      flushSync(() => {
        setInitialState((s) => ({
          ...s,
          currentUser: userInfo,
        }));
      });
    }
  };

  const handleSubmit = async (values: API.LoginParams) => {
    try {
      // 登录
      const msg = await login({ ...values, type });
      if (msg.status === 'ok') {
        const defaultLoginSuccessMessage = intl.formatMessage({
          id: 'pages.login.success',
          defaultMessage: 'Login successfull!',
        });
        message.success(defaultLoginSuccessMessage);
        await fetchUserInfo();
        const urlParams = new URL(window.location.href).searchParams;
        history.push(urlParams.get('redirect') || '/');
        return;
      }
      console.log(msg);
      // 如果失败去设置用户错误信息
      setUserLoginState(msg);
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
            <LoginForm<API.LoginParams>
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
                  name="username"
                  fieldProps={{
                    size: 'large',
                    prefix: <UserOutlined />,
                  }}
                  placeholder={intl.formatMessage({
                    id: 'pages.login.username.placeholder',
                    defaultMessage: 'admin or user',
                  })}
                  rules={[
                    {
                      required: true,
                      message: (
                        <FormattedMessage
                          id="pages.login.username.required"
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
