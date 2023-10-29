'use client'

import { useState, useEffect } from "react";
import { Link } from "@aws-amplify/ui-react";
import { API } from 'aws-amplify'
import { Institute } from "@/src/API";
import { listInstitutes } from "@/src/graphql/queries";
import '../configureAmplify'

export default function Home() {
  const [institutes, setInstitutes] = useState([]);
  
  async function fetchPost() {
    try {
      const instituteData: any = await API.graphql({
        query: listInstitutes
      });
      setInstitutes(instituteData.data.listInstitutes.items);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchPost();
  }, [])

  return (
    <div>
      Hello World!

      <ul>
        {
          institutes.map((institute: Institute, index) => (
            <li key={index}><Link href={`/institute/${institute.id}`}>{institute.title}</Link></li>
          ))
        }
      </ul>
    </div>
  );
}