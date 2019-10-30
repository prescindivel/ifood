import React, { useState, useEffect, useMemo } from 'react';
import socketio from 'socket.io-client';

import api from '../../services/api';

import * as S from './styles';

const RequestNotifications = () => {
  const [requests, setRequests] = useState([]);

  const userId = localStorage.getItem('user_id');

  const socket = useMemo(
    () =>
      socketio('http://localhost:3333', {
        transports: ['websocket'],
        query: { userId },
      }),
    [userId]
  );

  useEffect(() => {
    socket.on('order_request', data => {
      setRequests([...requests, data]);
    });
  }, [requests, socket]);

  const token = localStorage.getItem('token');
  const headers = { Authorization: `Bearer ${token}` };

  async function handleAccept(id) {
    await api.post(`/orders/${id}/approvals`, {}, { headers });

    setRequests(requests.filter(({ _id }) => _id !== id));
  }

  async function handleReject(id) {
    await api.post(`/orders/${id}/rejections`, {}, { headers });

    setRequests(requests.filter(({ _id }) => _id !== id));
  }

  return (
    <S.Container>
      {requests.map(({ _id, user, restaurant, name }) => (
        <li key={_id}>
          <p>
            <strong>{user.name}</strong> pediu {name} no
            <strong> {restaurant.name}</strong>
          </p>
          <S.AcceptButton
            className="accept"
            onClick={() => handleAccept(_id)}
            type="button"
          >
            ACEITAR
          </S.AcceptButton>

          <S.RejectButton
            className="reject"
            onClick={() => handleReject(_id)}
            type="button"
          >
            REJEITAR
          </S.RejectButton>
        </li>
      ))}
    </S.Container>
  );
};

export default RequestNotifications;
